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
  const header = elementCreator('h2', 'about-header');
  const body = elementCreator('div', 'about-body');
  
  header.innerHTML = 'The Atmosphere';
  body.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?</p>';

  atmosphere.appendChild(header);
  atmosphere.appendChild(body);

  return atmosphere;
}

function cafeCreator() {
  const cafe = elementCreator('div', 'cafe');
  const header = elementCreator('h2', 'about-header');
  const body = elementCreator('div', 'about-body');
  
  header.innerHTML = 'The Cafe';
  body.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?</p>';

  cafe.appendChild(header);
  cafe.appendChild(body);
  
  return cafe;
}

function storyCreator() {
  const story = elementCreator('div', 'story');
  const header = elementCreator('h2', 'about-header');
  const body = elementCreator('div', 'about-body');
  
  header.innerHTML = 'The Story';
  body.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis eius amet atque laudantium quae, unde, nostrum nisi cupiditate, mollitia facilis. Consequuntur harum eaque officia ad adipisci libero, doloremque cumque?</p>';

  story.appendChild(header);
  story.appendChild(body);
  
  return story;
}

export {aboutTab};