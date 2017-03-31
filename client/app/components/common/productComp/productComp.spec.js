import ProductCompModule from './productComp'
import ProductCompController from './productComp.controller';
import ProductCompComponent from './productComp.component';
import ProductCompTemplate from './productComp.html';

describe('ProductComp', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductCompModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductCompController();
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
      expect(ProductCompTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductCompComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductCompTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductCompController);
      });
  });
});
