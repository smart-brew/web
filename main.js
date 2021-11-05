const menu = document.querySelector('.menu');
const menuItems = [...menu.getElementsByTagName('a')];

const home = document.getElementById('home');
const project = document.getElementById('project');
const members = document.getElementById('members');
const milestones = document.getElementById('milestones');
const timeline = document.getElementById('timeline');
const documents = document.getElementById('documents');

const headingsArray = [home, project, members, milestones, timeline, documents];
// variable for scrolling detection
var isScrolling;

var currentActiveMenu = menu.querySelector(`.home`);
let clickedMenuItem = menu.querySelector(`.home`);
let activeMenu = menu.querySelector(`.home`);
let isClicked;

const addBlackBorderToActive = () => {
  currentActiveMenu.classList.add('border-transparent');
  currentActiveMenu.classList.remove('border-black');
  activeMenu.classList.remove('border-transparent');
  activeMenu.classList.add('border-black');
};

// add listener to each menu item
menuItems.forEach((menuButton) => {
  menuButton.addEventListener('click', (event) => {
    clickedMenuItem = event.target.closest('li');
    activeMenu = clickedMenuItem;

    // this blocks to execute the setTimeout function
    // clearing the setTimeout timer
    window.clearTimeout(isClicked);

    // Set a timeout to run after scrolling ends
    isClicked = setTimeout(function () {
      addBlackBorderToActive();
      currentActiveMenu = activeMenu;
    }, 50);
  });
});

window.addEventListener('scroll', (event) => {
  var bestHeading = home;
  headingsArray.forEach((el) => {
    const elY = el.getBoundingClientRect().y;
    const targetY = home.getBoundingClientRect().y;
    if (elY < 250 && elY > targetY) {
      bestHeading = el;
    }
  });
  activeMenu = menu.querySelector(`.${bestHeading.id}`);

  // fix for marking checked category if scroll not possible
  // get li element index which emitted the event
  const indexClickedMenuItem = [...menu.getElementsByTagName('li')].findIndex(
    (item) => item === clickedMenuItem
  );
  const indexScroll = [...menu.getElementsByTagName('li')].findIndex(
    (item) => item === currentActiveMenu
  );
  addBlackBorderToActive();

  currentActiveMenu = activeMenu;
  // return;

  // this blocks to execute the setTimeout function
  // clearing the setTimeout timer
  window.clearTimeout(isScrolling);

  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(function () {
    if (indexClickedMenuItem > indexScroll) {
      activeMenu = clickedMenuItem;
    }
    addBlackBorderToActive();
    currentActiveMenu = activeMenu;
    clickedMenuItem = menu.querySelector(`.home`);
  }, 50);
});
