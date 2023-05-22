import './style.css';
import _ from 'lodash';
import logo from './images/logo2.png';

const logoContainer = document.querySelector('.logo');
const imgElement = document.createElement('img');
imgElement.src = logo;

logoContainer.appendChild(imgElement);
