import {elementCreator, tabCreator} from './elementfunctions';

function menuTab() {
  const tabContainer = tabCreator();
  tabContainer.textContent = 'Sorry, we are closed right now! :(';
  tabContainer.style.color = 'rgba(255, 255, 255, 0.8)';
  tabContainer.style.fontSize = '1.4em';
}

export {menuTab};