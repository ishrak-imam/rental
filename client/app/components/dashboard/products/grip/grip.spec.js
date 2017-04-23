import GripModule from './grip'
import GripController from './grip.controller';
import GripComponent from './grip.component';
import GripTemplate from './grip.html';

describe('Grip', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GripModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GripController();
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
      expect(GripTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GripComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GripTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GripController);
      });
  });
});
