import angular from 'angular';
import uiRouter from 'angular-ui-router';
import placeOrderComponent from './placeOrder.component';

let placeOrderModule = angular.module('placeOrder', [
  uiRouter
])

.component('placeOrder', placeOrderComponent);

export default placeOrderModule;
