import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gripComponent from './grip.component';

let gripModule = angular.module('grip', [
  uiRouter
])

.component('grip', gripComponent);

export default gripModule;
