import { Translator } from './js/translator';
import { NavStates, NavLinks, Transitions } from './js/modules';
import { FontAwesome } from './js/vendors';
import './assets/images/favicon.png';
import './scss/main.scss';

(() => {
  FontAwesome.init();
  Translator.init();
  NavStates.init();
  NavLinks.init();
  Transitions.init();
})();
