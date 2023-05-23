import { getLikes, likeItem } from './modules/apiInvolvement.js';
import './style.css';
import createCard from './modules/card.js';
import fetchMovies from './modules/apiTvmaze.js';
import logo from './images/logo2.png';

const logoContainer = document.querySelector('.logo');
const imgElement = document.createElement('img');
imgElement.src = logo;

logoContainer.appendChild(imgElement);

const movieContainer = document.querySelector('.movies');

let likes = {};
let userLikes = {};  // save likes

fetchMovies().then((data) => {
  getLikes().then((likeData) => {
    likeData.forEach((like) => {
      likes[like.item_id] = like.likes;
    });

    data.forEach((item) => {
      const card = createCard(item.show, likes[item.show.id] || 0);

      card.querySelector(`button[data-id="${item.show.id}"]`).addEventListener('click', function() {
        const heartIcon = this.querySelector('i');
        if (!userLikes[item.show.id]) {
          likeItem(item.show.id).then(() => {  // increment counter likes
            likes[item.show.id] = (likes[item.show.id] || 0) + 1;
            card.querySelector(`#likes-${item.show.id}`).textContent = likes[item.show.id];
            userLikes[item.show.id] = true;  // save user
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
          }).catch((error) => {
            console.error('Error liking item:', error);
          });
        } else {
          alert('You have already liked this article.');
        }
    });

      movieContainer.appendChild(card);
    });
  }).catch((error) => {
    console.error('Error getting likes:', error);
  });
});
