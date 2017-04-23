import AllModule from './all'
import AllController from './all.controller';
import AllComponent from './all.component';
import AllTemplate from './all.html';

describe('All', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AllModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AllController();
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
      expect(AllTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AllComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AllTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AllController);
      });
  });
});
