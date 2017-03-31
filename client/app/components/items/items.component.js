import template from './items.html';
import controller from './items.controller';

let itemsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default itemsComponent;
