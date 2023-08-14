import { storyHTML, navHTML } from './html-components';

const displayStory = (container) => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", navHTML);
  container.insertAdjacentHTML("beforeend", storyHTML);
  feather.replace();
}

export default displayStory;
