import Swal from 'sweetalert2';
import createSpaceships from './modules/spaceships.js';
import showNotification from './modules/notification.js';
import mobileMenu from './modules/mobileMenu.js';
import insertLogo from './modules/insertLogo.js';
import { getLikes, likeItem } from './modules/apiInvolvement.js';
import './style.css';
import createCard from './modules/card.js';
import fetchMovies from './modules/apiTvmaze.js';
import commentsPopup from './modules/commentsPopup.js';
import cardCounter from './modules/cardCounter.js';

createSpaceships();
showNotification();
insertLogo();
mobileMenu();

const movieContainer = document.querySelector('.movies');

const likes = {};
const userLikes = {}; // save user / likes

fetchMovies().then((data) => {
  getLikes().then((likeData) => {
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
            likeItem(item.show.id).then(() => {
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
              title: 'Danger',
              text: "Giving more than one like is going to the dark side. don't do it.",
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
