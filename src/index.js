import Swal from 'sweetalert2';
import { getLikes, likeItem } from './modules/apiInvolvement.js';
import './style.css';
import createCard from './modules/card.js';
import fetchMovies from './modules/apiTvmaze.js';
import logo from './images/logo2.png';
import commentsPopup from './modules/commentsPopup.js';
import cardCounter from './modules/cardCounter.js';

const logoContainer = document.querySelector('.logo');
const imgElement = document.createElement('img');
imgElement.src = logo;

logoContainer.appendChild(imgElement);

const movieContainer = document.querySelector('.movies');

const likes = {};
const userLikes = {}; // save user / likes

fetchMovies().then((data) => {
  getLikes()
    .then((likeData) => {
      likeData.forEach((like) => {
        likes[like.item_id] = like.likes;
      });

      data.forEach((item) => {
        const card = createCard(item.show, likes[item.show.id] || 0);
        let blockLikes = false;

        card
          .querySelector(`button[data-id="${item.show.id}"]`)
          .addEventListener('click', function clickListener() {
            const heartIcon = this.querySelector('i');
            if (!userLikes[item.show.id] && !blockLikes) {
              blockLikes = true;
              likeItem(item.show.id)
                .then(() => {
                  // increment counter likes
                  likes[item.show.id] = (likes[item.show.id] || 0) + 1;
                  card.querySelector(`#likes-${item.show.id}`).textContent = likes[item.show.id];
                  userLikes[item.show.id] = true; // save user
                  heartIcon.classList.remove('far');
                  heartIcon.classList.add('fas');
                  blockLikes = false;
                });
            } else {
              Swal.fire({
                icon: 'info',
                title: 'Notification',
                text: 'You have already liked this article.',
              });
            }
          });
        movieContainer.appendChild(card);
      });
      // Movies counter on home page
      document.getElementById('cardCounter').textContent = cardCounter(data);
      // Comments popup
      commentsPopup(data);
    });
});
