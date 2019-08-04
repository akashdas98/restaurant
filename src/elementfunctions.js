function elementCreator() {
  const element = document.createElement(arguments[0]);
  
  for(let i = 1; i < arguments.length; i++) {
    element.classList.add(arguments[i]);
  }

  return element;
}

function tabCreator() {
  const main = document.querySelector('.main');
  const tabContainer = elementCreator('div', 'tab-container');

  tabContainer.classList.add('tab-container');
  main.removeChild(main.childNodes[1]);
  main.appendChild(tabContainer);
  
  return tabContainer;
}

export {elementCreator, tabCreator};