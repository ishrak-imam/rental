import angular from 'angular';
import uiRouter from 'angular-ui-router';
import audiosComponent from './audios.component';

let audiosModule = angular.module('audios', [
  uiRouter
])

.component('audios', audiosComponent);

export default audiosModule;
