import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productCompComponent from './productComp.component';

let productCompModule = angular.module('productComp', [
  uiRouter
])

.component('productComp', productCompComponent);

export default productCompModule;
