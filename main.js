const menu = document.querySelector('.menu');

const domov = document.getElementById('domov');
const projekt = document.getElementById('projekt');
const clenovia = document.getElementById('clenovia');
const milniky = document.getElementById('milniky');
const casova_os = document.getElementById('casova-os');
const dokumenty = document.getElementById('dokumenty');

const pole = [domov, projekt, clenovia, milniky, casova_os, dokumenty];

var currentActiveMenu = menu.querySelector(`.domov`);

window.addEventListener('scroll', (ev) => {
  var najlepsie = domov;
  pole.forEach((el) => {
    const elY = el.getBoundingClientRect().y;
    const najlepsieY = domov.getBoundingClientRect().y;
    if (elY < 180 && elY > najlepsieY) {
      najlepsie = el;
    }
  });

  const activeMenu = menu.querySelector(`.${najlepsie.id}`);

  currentActiveMenu.classList.add('border-transparent');
  currentActiveMenu.classList.remove('border-black');
  activeMenu.classList.remove('border-transparent');
  activeMenu.classList.add('border-black');

  currentActiveMenu = activeMenu;
});
