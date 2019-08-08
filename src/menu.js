import {elementCreator, tabCreator} from './elementfunctions';

function menuTab() {
  const tabContainer = tabCreator();
  const menuHeader = elementCreator('h2', 'menu-header');

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
  const menuBody = addMenuBody();
  const table = menuTableCreator(6);
  const tableProperties = getTableProperties(table);

  tableProperties.dishes[0].textContent = 'Pancakes with Maple Syrup';
  tableProperties.descriptions[0].textContent = 'Light, fluffy and delicious pancakes drizzled with rich maple syrup.';
  tableProperties.prices[0].textContent = '$20';

  tableProperties.dishes[1].textContent = 'Belgian Style Waffles';
  tableProperties.descriptions[1].textContent = 'Crispy on the outside but light and spungy on the inside, with deep pockets filled with your favorite syrups - chocolate, caramel, maple or blueberry!!';
  tableProperties.prices[1].textContent = '$20';

  tableProperties.dishes[2].textContent = 'Pancakes with Maple Syrup';
  tableProperties.descriptions[2].textContent = 'Light, fluffy and delicious pancakes drizzled with rich maple syrup.';
  tableProperties.prices[2].textContent = '$20';

  tableProperties.dishes[3].textContent = 'Belgian Style Waffles';
  tableProperties.descriptions[3].textContent = 'Crispy on the outside but light and spungy on the inside, with deep pockets filled with your favorite syrups - chocolate, caramel, maple or blueberry!!';
  tableProperties.prices[3].textContent = '$20';

  tableProperties.dishes[4].textContent = 'Pancakes with Maple Syrup';
  tableProperties.descriptions[4].textContent = 'Light, fluffy and delicious pancakes drizzled with rich maple syrup.';
  tableProperties.prices[4].textContent = '$20';

  tableProperties.dishes[5].textContent = 'Belgian Style Waffles';
  tableProperties.descriptions[5].textContent = 'Crispy on the outside but light and spungy on the inside, with deep pockets filled with your favorite syrups - chocolate, caramel, maple or blueberry!!';
  tableProperties.prices[5].textContent = '$20';

  menuBody.appendChild(table);
}

function loadCoffee() {
  const menuBody = addMenuBody();
  const table = menuTableCreator(4);
  const tableProperties = getTableProperties(table);

  tableProperties.dishes[0].textContent = 'Caffè Americano';
  tableProperties.descriptions[0].textContent = 'Made from the finest Arabica beans espresso. As simple and flavorful as an Americano gets.';
  tableProperties.prices[0].textContent = '$10';

  tableProperties.dishes[1].textContent = 'Cinnamon Cappuccino - Hot / Iced';
  tableProperties.descriptions[1].textContent = 'Foamy, creamy and filled with the flavors of Arabica beans.';
  tableProperties.prices[1].textContent = '$10';

  tableProperties.dishes[2].textContent = 'Caffè Americano';
  tableProperties.descriptions[2].textContent = 'Made from the finest Arabica beans espresso. As simple and flavorful as an Americano gets.';
  tableProperties.prices[2].textContent = '$10';

  tableProperties.dishes[3].textContent = 'Cinnamon Cappuccino - Hot / Iced';
  tableProperties.descriptions[3].textContent = 'Foamy, creamy and filled with the flavors of Arabica beans.';
  tableProperties.prices[3].textContent = '$10';

  menuBody.appendChild(table);
}

function addMenuBody() {
  const menuTab = document.querySelector('.menu-tab');
  const menuBody = elementCreator('div', 'menu-body');

  menuTab.appendChild(menuBody);
  return menuBody;
}

function menuTableCreator(size) {
  const table = elementCreator('table', 'menu-table');
  
  for(let i = 0; i < size; i++) {
    table.insertRow(i);
  }

  Array.from(table.rows).forEach(row => {
    row.insertCell(-1);
    row.insertCell(-1);
  });

  Array.from(table.rows).forEach(row => {
    row.cells[0].appendChild(elementCreator('div', 'dish'));
    row.cells[0].appendChild(elementCreator('div', 'dish-description'));
    row.cells[1].appendChild(elementCreator('div', 'price'));
  });

  return table;
}

function getTableProperties(table) {
  const dishes = getDishes(table);
  const descriptions = getDescriptions(table);
  const prices = getPrices(table);

  function getDishes(table) {
    const dishes = [];
    
    Array.from(table.rows).forEach(row => {
      dishes.push(row.cells[0].childNodes[0]);
    });
  
    return dishes;
  }
  
  function getDescriptions(table) {
    const descriptions = [];
    
    Array.from(table.rows).forEach(row => {
      descriptions.push(row.cells[0].childNodes[1]);
    });
  
    return descriptions;
  }
  
  function getPrices(table) {
    const prices = [];
    
    Array.from(table.rows).forEach(row => {
      prices.push(row.cells[1].childNodes[0]);
    });
  
    return prices;
  }

  return {dishes, descriptions, prices};
}

export {menuTab};