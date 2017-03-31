import LightingModule from './lighting'
import LightingController from './lighting.controller';
import LightingComponent from './lighting.component';
import LightingTemplate from './lighting.html';

describe('Lighting', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LightingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LightingController();
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
      expect(LightingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LightingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LightingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LightingController);
      });
  });
});
