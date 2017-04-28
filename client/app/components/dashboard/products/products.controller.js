class ProductsController {
  constructor($state, DATA) {
    'ngInject';
    this.state = $state;
    this.categories = DATA.categories;
  }

}

export default ProductsController;
