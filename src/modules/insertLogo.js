import logo from '../images/logo2.png';

const insertLogo = () => {
  const logoContainer = document.querySelector('.logo');
  const imgElement = document.createElement('img');
  imgElement.src = logo;
  logoContainer.appendChild(imgElement);
};

export default insertLogo;