import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsComponent from './products.component';



// components //
import productComp from '../../common/productComp/productComp'
import all from './all/all';
import camera from './camera/camera';
import lens from './lens/lens';
import lighting from './lighting/lighting';
import audios from './audios/audios';
import grip from './grip/grip';
import accessories from './accessories/accessories';

let productsModule = angular.module('products', [
  uiRouter,
  productComp.name,
  all.name,
  camera.name,
  lens.name,
  lighting.name,
  audios.name,
  grip.name,
  accessories.name
])


  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider

      .state('products.all', {
        url: '/all',
        template: '<all></all>'
      })

      .state('products.camera', {
        url: '/camera',
        template: '<camera></camera>'
      })

      .state('products.lens', {
        url: '/lens',
        template: '<lens></lens>'
      })

      .state('products.lighting', {
        url: '/lighting',
        template: '<lighting></lighting>'
      })

      .state('products.audio', {
        url: '/audio',
        template: '<audios></audios>'
      })

      .state('products.grip', {
        url: '/grip',
        template: '<grip></grip>'
      })

      .state('products.accessories', {
        url: '/accessories',
        template: '<accessories></accessories>'
      })

    $urlRouterProvider.otherwise('/products/all');
  })

  .component('products', productsComponent);

export default productsModule;
