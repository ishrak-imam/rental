import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cameraComponent from './camera.component';

let cameraModule = angular.module('camera', [
  uiRouter
])

.component('camera', cameraComponent);

export default cameraModule;
