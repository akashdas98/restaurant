import {elementCreator} from './elementfunctions'

function pageload() {
  const content = document.querySelector('#content');  
  const bg = elementCreator('div', 'bg');
  const layer = elementCreator('div', 'layer');
  const main = elementCreator('div', 'main');
  const header = elementCreator('header');
  const logo = elementCreator('div', 'logo');
  const description = elementCreator('div', 'description');
  const nav = elementCreator('nav');

  logo.innerHTML = `JOHN<span>'s</span>`;
  
  description.innerHTML = `<h2>Chef:</h2>
    <p>We've prepared the flakiest puff pastries for you. Start your day with a puff!</p>`;
    
  nav.innerHTML = `<ul>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Reservations</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>`;
  
  header.appendChild(logo);
  main.appendChild(header);
  main.appendChild(description);
  layer.appendChild(main);
  layer.appendChild(nav);
  bg.appendChild(layer);
  content.appendChild(bg);
}

export {pageload};