import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lensComponent from './lens.component';

let lensModule = angular.module('lens', [
  uiRouter
])

.component('lens', lensComponent);

export default lensModule;
