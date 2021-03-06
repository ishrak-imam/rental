import CameraModule from './camera'
import CameraController from './camera.controller';
import CameraComponent from './camera.component';
import CameraTemplate from './camera.html';

describe('Camera', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CameraModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CameraController();
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
      expect(CameraTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CameraComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CameraTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CameraController);
      });
  });
});
