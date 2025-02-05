// js/main.js
import { initFAQ } from './faq.js';
import { initModal } from './modal.js';
import { dynamicText } from './dynamicText.js';

document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initModal();
  dynamicText('member'); // You can change to 'member' or 'guest' or other value
});
