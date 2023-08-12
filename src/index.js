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
    document.body.style.overflow = '';
    // when opening nav it adds overflow hidden, this ensure it removes it after user confirms a page
    enableScroll();
    addScrollY(container);

    container.insertAdjacentHTML("beforeend", navHTML);
    container.insertAdjacentHTML("beforeend", landingHTML);
    menuSmListener();
    feather.replace();
  } else if (e.target.id === "menu") {
    enableScroll();
    addScrollY(container);

    displayMenu(container);
    menuSmListener();
  } else if (e.target.id === "story") {
    enableScroll();
    removeScrollY(container);

    displayStory(container);
    menuSmListener();
  } else if (e.target.id === "contact") {
    enableScroll();
    addScrollY(container);

    displayContact(container);
    menuSmListener();
  }
})

const addScrollY = (container) => {
  // remove the applied class (scroll disable) in case when returning back from story page
  let containerParentClass = container.parentNode.classList
  if (containerParentClass.contains('overflow-y-visible') && containerParentClass.contains('md:overflow-y-hidden')) {
    container.parentNode.classList.remove('overflow-y-visible');
    container.parentNode.classList.remove('md:overflow-y-hidden');
  }
} 

const removeScrollY = (container) => {
  // this disables the image to overflow the document (remove vertical scrolling on md device)
  container.parentNode.classList.add('overflow-y-visible');
  container.parentNode.classList.add('md:overflow-y-hidden');
}

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
