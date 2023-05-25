function mobileMenu() {
  document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('nav');
    const navigationLeft = getComputedStyle(nav).getPropertyValue('left');
    if (navigationLeft === '0px') {
      nav.style.left = '-100%';
    } else {
      nav.style.left = '0px';
    }
  });
}

export default mobileMenu;
