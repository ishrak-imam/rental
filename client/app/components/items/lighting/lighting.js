import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lightingComponent from './lighting.component';

let lightingModule = angular.module('lighting', [
  uiRouter
])

.component('lighting', lightingComponent);

export default lightingModule;
