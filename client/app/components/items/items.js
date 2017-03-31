import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemsComponent from './items.component';


// components //
import productComp from '../common/productComp/productComp'
import allItems from './allItems/allItems';
import camera from './camera/camera';
import lens from './lens/lens';
import lighting from './lighting/lighting';
import audios from './audios/audios';
import grip from './grip/grip';
import accessories from './accessories/accessories';

let itemsModule = angular.module('items', [
  uiRouter,
  allItems.name,
  camera.name,
  lens.name,
  lighting.name,
  audios.name,
  grip.name,
  accessories.name,
  productComp.name
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider

      .state('all', {
        url: '/',
        template: '<all-items></all-items>'
      })

      .state('camera', {
        url: '/camera',
        template: '<camera></camera>'
      })

      .state('lens', {
        url: '/lens',
        template: '<lens></lens>'
      })

      .state('lighting', {
        url: '/lighting',
        template: '<lighting></lighting>'
      })

      .state('audio', {
        url: '/audio',
        template: '<audios></audios>'
      })

      .state('grip', {
        url: '/grip',
        template: '<grip></grip>'
      })

      .state('accessories', {
        url: '/accessories',
        template: '<accessories></accessories>'
      });

    $urlRouterProvider.otherwise('/');
  })

  .component('items', itemsComponent);

export default itemsModule;
