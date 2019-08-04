import {pageload} from './pageload';
import {menuTab} from './menu';

pageload();

const Tabs = (() => {
  const tabs = document.querySelectorAll('nav a');
  
  function clickTab() {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        reset();
        newTab(tab);
      });
    });
  }

  function reset() {
    Array.from(tabs).forEach(tab => {
      tab.style.borderBottom = '0';
    });
  }

  function newTab(tab) {
    const tabClass = tab.className;
    tab.style.borderBottom = '5px solid rgba(211, 110, 15, 0.95)';
    switch(tabClass) {
      case 'menu':
        menuTab();
        break;
      /*case 'reservations':
        reservationsTab();
        break;
      case 'about':
        aboutTab();
        break;
      case 'contact':
        contactTab();
        break;*/
    }
  }

  return {clickTab};
})();

Tabs.clickTab();