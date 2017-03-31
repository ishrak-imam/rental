import angular from 'angular';
import uiRouter from 'angular-ui-router';
import accessoriesComponent from './accessories.component';

let accessoriesModule = angular.module('accessories', [
  uiRouter
])

.component('accessories', accessoriesComponent);

export default accessoriesModule;
