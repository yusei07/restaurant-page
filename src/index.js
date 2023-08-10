import './style.css';
import { landingHTML, navHTML } from './html-components.js';

const container = document.querySelector("#container");

window.addEventListener("load", () => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", navHTML);
  container.insertAdjacentHTML("beforeend", landingHTML);
  displayNavItems();
  feather.replace();
})

function displayNavItems() {
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
feather.replace();
