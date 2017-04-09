import angular from 'angular';
import uiRouter from 'angular-ui-router';
import root from './app.component';


// components //
import header from './components/header/header';
import footer from './components/footer/footer';
import items from './components/items/items';
import brandLogos from './components/brandLogos/brandLogos';
import placeOrder from './components/placeOrder/placeOrder';
import mobileDevice from './components/mobileDevice/mobileDevice';


// services //
import data from './services/data';
import device from './utils/deviceDetect';


// styles //
import style from './styles/style.css';
import custom from './styles/custom.css';


angular.module('root', [
  uiRouter,
  header.name,
  footer.name,
  items.name,
  brandLogos.name,
  mobileDevice.name,
  placeOrder.name
])

  .config(($locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
  })

  .service('device', device)
  .service('DATA', data)
  .component('root', root);
