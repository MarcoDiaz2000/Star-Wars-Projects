import './style.css';
import createCard from './modules/card.js';
import fetchMovies from './modules/apiTvmaze.js';
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

  // Comments popup
  const commentsBtn = document.querySelectorAll('.comments-btn');
  commentsBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      data.forEach((item) => {
        if (item.show.id.toString() === btn.id) {
          const body = document.querySelector('body');
          const main = document.createElement('div');
          const closeBtn = document.createElement('button');
          main.className = 'main';
          closeBtn.className = 'close';
          closeBtn.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
          const popup = document.createElement('div');
          popup.className = 'popup';
          popup.innerHTML = `
          <div class="popup-items">
            <img src="${item.show.image.medium}" alt="${item.show.name}">
            <h2>${item.show.name}</h2>
            <div class="details">
              <div class="details-item">
                <li>Language: ${item.show.language}</li>
                <li>Premiered: ${item.show.premiered}</li>
              </div>
              <div class="details-item">
                <li>Rating: ${item.show.rating.average}</li>
                <li>Genre: ${item.show.genres}</li>
              </div>
            </div>
            
          </div>
          `;
          popup.appendChild(closeBtn);
          main.appendChild(popup);
          body.appendChild(main);

          const close = document.querySelector('.close');
          close.addEventListener('click', () => {
            body.removeChild(main);
          });
        }
      });
    });
  });
});
