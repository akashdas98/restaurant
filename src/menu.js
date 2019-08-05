import {elementCreator, tabCreator} from './elementfunctions';

function menuTab() {
  const tabContainer = tabCreator();
  const menuHeader = elementCreator('div', 'menu-header');

  tabContainer.classList.add('menu-tab');
  menuHeader.innerHTML = '<span class="coffee">Coffee</span><span class="mid">|</span><span class="breakfast">Breakfast</span>';
  tabContainer.appendChild(menuHeader);

  menuLoad(menuHeader.childNodes[2]);
  enableMenuSwitch();
}

function enableMenuSwitch() {
  const menuOptions = document.querySelectorAll('.menu-header span');

  menuOptions.forEach(menuOption => {
    menuOption.addEventListener('click', (e) => {
      if(menuOption.className == 'mid') return;
      resetMenu();
      menuLoad(menuOption);
    });
  });
}

function resetMenu() {
  const menuOptions = document.querySelectorAll('.menu-header span');
  const menu = document.querySelector('.menu-tab');

  if(menu.childNodes[1]) {
    menu.removeChild(menu.childNodes[1]);
  }
  
  menuOptions.forEach(menuOption => {
    menuOption.removeAttribute('style');
  });
}

function menuLoad(menuOption) {
  const menuClass = menuOption.className;
  
  menuOption.style.color = 'rgba(211, 110, 15, 0.95)';
  
  if(menuClass == 'breakfast') {
    loadBreakfast();
  } else {
    loadCoffee();
  }
}

function loadBreakfast() {
  const table = elementCreator('table');
  const rows = [];
  const cells = [];
  const menuBody = addMenuBody();
  
  table.classList.add('menu-table');

  for(let i = 0; i < 6; i++) {
    cells[i] = new Array(2);
  }
  
  for(let i = 0; i < 6; i++) {
    rows[i] = table.insertRow(i);
    for(let j = 0; j < 2; j++) {
      cells[i].push(rows[i].insertCell(j));
    }
  }
  
  menuBody.appendChild(table);
}

function loadCoffee() {
  const table = elementCreator('table');
  const rows = [];
  const cells = [];
  const menuBody = addMenuBody();
  
  table.classList.add('menu-table');

  for(let i = 0; i < 4; i++) {
    cells[i] = new Array(2);
  }
  
  for(let i = 0; i < 4; i++) {
    rows[i] = table.insertRow(i);
    for(let j = 0; j < 2; j++) {
      cells[i].push(rows[i].insertCell(j));
    }
  }
  
  menuBody.appendChild(table);
}

function addMenuBody() {
  const menuTab = document.querySelector('.menu-tab');
  const menuBody = elementCreator('div', 'menu-body');

  menuTab.appendChild(menuBody);
  return menuBody;
}

export {menuTab};