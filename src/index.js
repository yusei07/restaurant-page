import './style.css';
import { landingHTML, navHTML } from './html-components.js';
import displayStory from './story.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';

const container = document.querySelector("#container");

window.addEventListener("load", () => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", navHTML);
  container.insertAdjacentHTML("beforeend", landingHTML);
  menuSmListener();
  feather.replace();
})

container.addEventListener("click", (e) => {
  if (e.target.id === "home") {
    // clear previous html and classes
    container.innerHTML = "";
    container.parentNode.classList.remove('overflow-y-visible')
    container.parentNode.classList.remove('md:overflow-y-hidden')

    container.insertAdjacentHTML("beforeend", navHTML);
    container.insertAdjacentHTML("beforeend", landingHTML);
    menuSmListener();
    feather.replace();
  } else if (e.target.id === "menu") {
    // remove the applied class (scroll disable) in case when returning back from story page
    container.parentNode.classList.remove('overflow-y-visible')
    container.parentNode.classList.remove('md:overflow-y-hidden')

    displayMenu(container);
    menuSmListener();
  } else if (e.target.id === "story") {
    // this disables the image to overflow the document (remove vertical scrolling on md device)
    container.parentNode.classList.add('overflow-y-visible')
    container.parentNode.classList.add('md:overflow-y-hidden')

    displayStory(container);
    menuSmListener();
  } else if (e.target.id === "contact") {
    container.parentNode.classList.remove('overflow-y-visible')
    container.parentNode.classList.remove('md:overflow-y-hidden')

    displayContact(container);
    menuSmListener();
  }
})

function menuSmListener() {
  const menuItems = document.querySelector("#menu-item");
  const menuIcon = document.querySelector("#open-btn");
  const closeIcon = document.querySelector("#close-btn");

  menuIcon.addEventListener('click', () => {
    // hide menu icon
    menuIcon.classList.add('hidden');
    // display menu items
    menuItems.classList.remove('hidden');
    menuItems.classList.add('flex');
    // display close icon
    closeIcon.classList.remove('hidden');
    disableScroll();
  })

  closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('hidden');
    menuItems.classList.add('hidden');
    menuItems.classList.remove('flex');
    closeIcon.classList.add('hidden');
    enableScroll();
  })
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

// feather icon
// feather.replace();
