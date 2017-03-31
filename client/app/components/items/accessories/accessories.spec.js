import AccessoriesModule from './accessories'
import AccessoriesController from './accessories.controller';
import AccessoriesComponent from './accessories.component';
import AccessoriesTemplate from './accessories.html';

describe('Accessories', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AccessoriesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AccessoriesController();
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
      expect(AccessoriesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AccessoriesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AccessoriesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AccessoriesController);
      });
  });
});
