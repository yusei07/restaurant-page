import { storyHTML } from './html-components';

const displayStory = (container) => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", storyHTML);
  feather.replace();
}

export default displayStory;
