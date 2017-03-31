import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mobileDeviceComponent from './mobileDevice.component';

let mobileDeviceModule = angular.module('mobileDevice', [
  uiRouter
])

.component('mobileDevice', mobileDeviceComponent);

export default mobileDeviceModule;
