import BrandLogosModule from './brandLogos'
import BrandLogosController from './brandLogos.controller';
import BrandLogosComponent from './brandLogos.component';
import BrandLogosTemplate from './brandLogos.html';

describe('BrandLogos', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BrandLogosModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BrandLogosController();
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
      expect(BrandLogosTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BrandLogosComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BrandLogosTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BrandLogosController);
      });
  });
});
