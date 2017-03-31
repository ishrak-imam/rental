import MobileDeviceModule from './mobileDevice'
import MobileDeviceController from './mobileDevice.controller';
import MobileDeviceComponent from './mobileDevice.component';
import MobileDeviceTemplate from './mobileDevice.html';

describe('MobileDevice', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MobileDeviceModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MobileDeviceController();
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
      expect(MobileDeviceTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MobileDeviceComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MobileDeviceTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MobileDeviceController);
      });
  });
});
