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

fetchMovies().then((data) => {
  data.forEach((item) => {
    // Inicializar contador de likes para este item
    likes[item.id] = 0;

    const cardHTML = createCard(item.show);
    movieContainer.innerHTML += cardHTML;
  });

  // Agregar evento de click a todos los botones de "like"
  Array.from(document.querySelectorAll('.like button')).forEach(button => {
    button.addEventListener('click', function() {
      const itemId = this.dataset.id;
      // Asegurarse de que haya un valor inicial para likes[itemId]
      likes[itemId] = likes[itemId] ? likes[itemId] : 0;
      likes[itemId]++;
      document.querySelector(`#likes-${itemId}`).textContent = likes[itemId];
    });
  });
});
