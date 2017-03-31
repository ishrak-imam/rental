import angular from 'angular';
import uiRouter from 'angular-ui-router';
import brandLogosComponent from './brandLogos.component';

let brandLogosModule = angular.module('brandLogos', [
  uiRouter
])

.component('brandLogos', brandLogosComponent);

export default brandLogosModule;
