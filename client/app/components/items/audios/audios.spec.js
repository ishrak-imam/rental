import AudiosModule from './audios'
import AudiosController from './audios.controller';
import AudiosComponent from './audios.component';
import AudiosTemplate from './audios.html';

describe('Audios', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AudiosModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AudiosController();
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
      expect(AudiosTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AudiosComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AudiosTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AudiosController);
      });
  });
});
