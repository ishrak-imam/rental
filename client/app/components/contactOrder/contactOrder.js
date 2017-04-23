import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactOrderComponent from './contactOrder.component';

let contactOrderModule = angular.module('contactOrder', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider

    .state('contact', {
      url: 'contact',
      template: '<h1> contact </h1>'
    })

    .state('order', {
      url: 'order',
      template: '<h1> order </h1>'
    })
})

.component('contactOrder', contactOrderComponent);

export default contactOrderModule;
