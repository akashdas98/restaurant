import {pageload} from './pageload';

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
    tab.style.borderBottom = '5px solid rgba(211, 110, 15, 0.95)';
  }

  return {clickTab};
})();

Tabs.clickTab();