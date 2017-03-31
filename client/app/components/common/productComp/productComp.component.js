import template from './productComp.html';
import controller from './productComp.controller';

let productCompComponent = {
  restrict: 'E',
  bindings: {
    product: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default productCompComponent;
