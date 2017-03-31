import AllItemsModule from './allItems'
import AllItemsController from './allItems.controller';
import AllItemsComponent from './allItems.component';
import AllItemsTemplate from './allItems.html';

describe('AllItems', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AllItemsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AllItemsController();
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
      expect(AllItemsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AllItemsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AllItemsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AllItemsController);
      });
  });
});
