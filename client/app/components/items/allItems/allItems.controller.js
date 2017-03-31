class AllItemsController {
  constructor(DATA, $scope) {
    'ngInject'
    this.scope = $scope;
    this.items = DATA.items;
  }

  $onInit() {
    this.scope.$emit('ALL_ITEMS');
  }

  goTo = (to) => {
    this.scope.$emit('ITEM_SELECTED', to);
  }
}

export default AllItemsController;
