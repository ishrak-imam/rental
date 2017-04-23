import LensModule from './lens'
import LensController from './lens.controller';
import LensComponent from './lens.component';
import LensTemplate from './lens.html';

describe('Lens', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LensModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LensController();
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
      expect(LensTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LensComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LensTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LensController);
      });
  });
});
