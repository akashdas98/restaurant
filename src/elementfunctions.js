function elementCreator() {
  const element = document.createElement(arguments[0]);
  
  for(let i = 1; i < arguments.length; i++) {
    element.classList.add(arguments[i]);
  }

  return element;
}

export {elementCreator};