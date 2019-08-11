import {pageload} from './pageload';
import {menuTab} from './menu';
import {reservationsTab} from './reservations';
import {aboutTab} from './about';
import {contactTab} from './contact';

pageload();

(function tabs() {
  const tabs = document.querySelectorAll('nav a');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      reset();
      newTab(tab);
    });
  }); 

  function reset() {
    const main = document.querySelector('.main');
    
    if(main.childNodes[1]) {
      main.removeChild(main.childNodes[1]);
    }
    
    tabs.forEach(tab => {
      tab.style.borderBottom = '0';
      tab.style.color = '';  
    });
  }

  function selectTab(tab) {
    tab.style.borderBottom = '3px solid rgba(211, 110, 15, 0.95)';
    tab.style.color = 'white';
  }

  function newTab(tab) {
    const tabClass = tab.className;
    selectTab(tab);
    switch(tabClass) {
      case 'menu':
        menuTab();
        break;
      /*case 'reservations':
        reservationsTab();
        break;*/
      case 'about':
        aboutTab();
        break;
      case 'contact':
        contactTab();
        break;
    }
  }
})();