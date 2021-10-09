const menu = document.querySelector('.menu')
const menuItems = [...menu.getElementsByTagName('a')]

const domov = document.getElementById('domov')
const projekt = document.getElementById('projekt')
const clenovia = document.getElementById('clenovia')
const milniky = document.getElementById('milniky')
const casova_os = document.getElementById('casova-os')
const dokumenty = document.getElementById('dokumenty')

const pole = [domov, projekt, clenovia, milniky, casova_os, dokumenty]
// variable for scrolling detection
var isScrolling

var currentActiveMenu = menu.querySelector(`.domov`)
let clickedMenuItem = menu.querySelector(`.domov`)

// add listener to each menu item
menuItems.forEach((menuButton) => {
  menuButton.addEventListener('click', (event) => {
    clickedMenuItem = event.target.closest('li')
  })
})

window.addEventListener(
  'scroll',
  (event) => {
    var najlepsie = domov
    pole.forEach((el) => {
      const elY = el.getBoundingClientRect().y
      const najlepsieY = domov.getBoundingClientRect().y
      if (elY < 10 && elY > najlepsieY) {
        najlepsie = el
      }
    })
    let activeMenu = menu.querySelector(`.${najlepsie.id}`)

    // fix for marking checked category if scroll not possible
    // get li element index which emitted the event
    const IndexClickedMenuItem = [...menu.getElementsByTagName('li')].findIndex(
      (item) => item === clickedMenuItem
    )
    const indexScroll = [...menu.getElementsByTagName('li')].findIndex(
      (item) => item === currentActiveMenu
    )
    console.log({ IndexClickedMenuItem })
    console.log({ indexScroll })

    const addBlackBorderToActive = () => {
      currentActiveMenu.classList.add('border-transparent')
      currentActiveMenu.classList.remove('border-black')
      activeMenu.classList.remove('border-transparent')
      activeMenu.classList.add('border-black')
    }
    addBlackBorderToActive()

    currentActiveMenu = activeMenu

    // this blocks to execute the setTimeout function
    // clearing the setTimeout timer
    window.clearTimeout(isScrolling)

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      if (IndexClickedMenuItem > indexScroll) {
        activeMenu = clickedMenuItem
      }
      addBlackBorderToActive()
      currentActiveMenu = activeMenu
    }, 50)
  },
  false
)
