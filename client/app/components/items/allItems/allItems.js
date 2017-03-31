import angular from 'angular';
import uiRouter from 'angular-ui-router';
import allItemsComponent from './allItems.component';

let allItemsModule = angular.module('allItems', [
  uiRouter
])

.component('allItems', allItemsComponent);

export default allItemsModule;
