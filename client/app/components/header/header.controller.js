class HeaderController {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  toHome = () => {
    this.state.go('all');
  }
}

export default HeaderController;
