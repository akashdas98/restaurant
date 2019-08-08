import {elementCreator, tabCreator} from './elementfunctions';

function aboutTab() {
  const tabContainer = tabCreator();
  const atmosphere = atmosphereCreator();
  const cafe = cafeCreator();
  const story = storyCreator();

  tabContainer.classList.add('about-tab');

  tabContainer.appendChild(story);
  tabContainer.appendChild(atmosphere);
  tabContainer.appendChild(cafe);
}

function atmosphereCreator() {
  const atmosphere = elementCreator('div', 'atmosphere');
  const header = elementCreator('div', 'about-header');
  const body = elementCreator('div', 'about-body');
  
  header.textContent = 'The Atmosphere';
  body.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?';

  atmosphere.appendChild(header);
  atmosphere.appendChild(body);

  return atmosphere;
}

function cafeCreator() {
  const cafe = elementCreator('div', 'cafe');
  const header = elementCreator('div', 'about-header');
  const body = elementCreator('div', 'about-body');
  
  header.textContent = 'The Cafe';
  body.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?';

  cafe.appendChild(header);
  cafe.appendChild(body);
  
  return cafe;
}

function storyCreator() {
  const story = elementCreator('div', 'story');
  const header = elementCreator('div', 'about-header');
  const body = elementCreator('div', 'about-body');
  
  header.textContent = 'The Story';
  body.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?';

  story.appendChild(header);
  story.appendChild(body);
  
  return story;
}

export {aboutTab};