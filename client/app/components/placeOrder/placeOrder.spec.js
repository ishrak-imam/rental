import PlaceOrderModule from './placeOrder'
import PlaceOrderController from './placeOrder.controller';
import PlaceOrderComponent from './placeOrder.component';
import PlaceOrderTemplate from './placeOrder.html';

describe('PlaceOrder', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PlaceOrderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PlaceOrderController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PlaceOrderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PlaceOrderComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PlaceOrderTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PlaceOrderController);
      });
  });
});
