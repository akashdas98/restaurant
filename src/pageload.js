import {elementCreator} from './elementfunctions'

function pageload() {
  const content = document.querySelector('#content');  
  const bg = elementCreator('div', 'bg');
  const layer = elementCreator('div', 'layer');
  const main = elementCreator('div', 'main');
  const header = elementCreator('header');
  const logo = elementCreator('div', 'logo');
  const chef = elementCreator('div', 'chef');
  const nav = elementCreator('nav');

  logo.innerHTML = `<a href="./index.html">JOHN<span>'s</span></a>`;
  
  chef.innerHTML = `<h2>Chef:</h2>
    <p>We have prepared the fluffiest waffles for you. Start your day with a bite of this crispy goodness!</p>`;
    
  nav.innerHTML = `<ul>
      <li><a href="#" class="menu">Menu</a></li>
      <li><a href="#" class="reservations">Reservations</a></li>
      <li><a href="#" class="about">About</a></li>
      <li><a href="#" class="contacr">Contact</a></li>
    </ul>`;
  
  header.appendChild(logo);
  main.appendChild(header);
  main.appendChild(chef);
  layer.appendChild(main);
  layer.appendChild(nav);
  bg.appendChild(layer);
  content.appendChild(bg);
}

export {pageload};