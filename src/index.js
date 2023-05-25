import Swal from 'sweetalert2';
import { getLikes, likeItem } from './modules/apiInvolvement.js';
import './style.css';
import createCard from './modules/card.js';
import fetchMovies from './modules/apiTvmaze.js';
import logo from './images/logo2.png';
import commentsPopup from './modules/commentsPopup.js';
import cardCounter from './modules/cardCounter.js';
import spaceship1 from './images/spaceship1.png';
import spaceship2 from './images/spaceship2.png';
import spaceship3 from './images/spaceship4.png';

const spaceshipContainer1 = document.createElement('div');
const spaceshipContainer2 = document.createElement('div');
const spaceshipContainer3 = document.createElement('div');

spaceshipContainer1.id = 'spaceship1';
spaceshipContainer2.id = 'spaceship2';
spaceshipContainer3.id = 'spaceship3';

const spaceshipImg1 = document.createElement('img');
const spaceshipImg2 = document.createElement('img');
const spaceshipImg3 = document.createElement('img');

spaceshipImg1.src = spaceship1;
spaceshipImg2.src = spaceship2;
spaceshipImg3.src = spaceship3;

spaceshipContainer1.appendChild(spaceshipImg1);
spaceshipContainer2.appendChild(spaceshipImg2);
spaceshipContainer3.appendChild(spaceshipImg3);

document.body.appendChild(spaceshipContainer1);
document.body.appendChild(spaceshipContainer2);
document.body.appendChild(spaceshipContainer3);

setTimeout(() => {
  Swal.fire({
    title: 'Important message',
    html: `
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CHmABI0MmkA?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `,
  showCloseButton: true,
  showCancelButton: true,
  cancelButtonText: "Don't want to help",
  showConfirmButton: true,
  confirmButtonText: 'I want to help',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  })
}, 18000);

document.getElementById('menu-toggle').addEventListener('click', function () {
  const nav = document.getElementById('nav');
  const navigationLeft = getComputedStyle(nav).getPropertyValue('left');
  if (navigationLeft === '0px') {
    nav.style.left = '-100%';
  } else {
    nav.style.left = '0px';
  }
});

const logoContainer = document.querySelector('.logo');
const imgElement = document.createElement('img');
imgElement.src = logo;

logoContainer.appendChild(imgElement);

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
              text: 'Giving more than one like is going to the dark side. don\'t do it.',
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
