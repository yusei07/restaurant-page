import { navHTML, contactHTML } from './html-components.js';

const displayContact = (container) => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", navHTML);
  container.insertAdjacentHTML("beforeend", contactHTML);
  feather.replace();
}

export default displayContact;
