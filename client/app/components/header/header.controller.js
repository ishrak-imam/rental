class HeaderController {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  toHome = () => {
    this.state.go('products.all');
  }
}

export default HeaderController;
