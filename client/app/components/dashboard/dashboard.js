import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';

// components //
import products from './products/products';
import order from './order/order';
import contact from './contact/contact';

let dashboardModule = angular.module('dashboard', [
  uiRouter,
  products.name,
  order.name,
  contact.name
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider

      .state('products', {
        url: '/products',
        template: '<products></products>',
        abstract: true
      })

      .state('order', {
        url: '/order',
        template: '<order></order>'
      })

      .state('contact', {
        url: '/contact',
        template: '<contact></contact>'
      })
  })

  .component('dashboard', dashboardComponent);

export default dashboardModule;
