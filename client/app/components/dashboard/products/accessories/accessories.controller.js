class AccessoriesController {
  constructor(DATA) {
    'ngInject';
    this.accessories = DATA.products.accessories;
  }
}

export default AccessoriesController;
