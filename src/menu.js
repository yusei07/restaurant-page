import { menuHTML, navHTML } from './html-components';

const displayMenu = (container) => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", navHTML);
  container.insertAdjacentHTML("beforeend", menuHTML);
  feather.replace();
}

export default displayMenu;
