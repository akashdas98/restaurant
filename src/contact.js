import {elementCreator, tabCreator} from './elementfunctions';

function contactTab() {
  const tabContainer = tabCreator();
  const socialDiv = elementCreator('div', 'social-div');
  const phoneDiv = elementCreator('div', 'phone-div');

  tabContainer.classList.add('contact-tab');

  socialDiv.innerHTML = '<div>Social Media:</div><a href="#"><img src="./instagram.png"></img></a><a href="#"><img src="./twitter.png"></img></a><a href="#"><img src="./facebook.png"></img></a>';
  phoneDiv.innerHTML = '<div class="phones">Phones:</div><div class="numbers"><span>1800-000-1111</span><span>1800-000-1112</span></div>';

  tabContainer.appendChild(socialDiv);
  tabContainer.appendChild(phoneDiv);
}

export {contactTab};