import './style.css';
import { createCard } from './modules/card.js';
import { fetchMovies } from './modules/apiTvmaze.js';
import logo from './images/logo2.png';

const logoContainer = document.querySelector('.logo');
const imgElement = document.createElement('img');
imgElement.src = logo;

logoContainer.appendChild(imgElement);

const movieContainer = document.querySelector('.movies');

fetchMovies().then((data) => {
  data.forEach((item) => {
    const cardHTML = createCard(item.show);
    movieContainer.innerHTML += cardHTML;
  });
});
