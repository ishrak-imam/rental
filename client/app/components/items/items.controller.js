
class ItemsController {

  constructor($state, DATA, $window, $scope) {
    'ngInject';
    this.scope = $scope;
    this.window = $window;
    this.navObj = {
      camera: {class: ''},
      lens: {class: ''},
      lighting: {class: ''},
      audio: {class: ''},
      grip: {class: ''},
      accessories: {class: ''}
    };
    this.state = $state;
    this.nav = false;
    this.items = DATA.items;
  }

  $onInit() {
    const url = this.window.location.hash;
    const routeName = url.substring(url.lastIndexOf('/') + 1);
    if (routeName) {
      this.showTopNav();
      this.setActiveClass(routeName);
    }

    this.scope.$on('ALL_ITEMS', () => {
      this.hideTopNav();
    });

    this.scope.$on('ITEM_SELECTED', (event, item) => {
      this.goTo(item)
    });
  }

  goTo = (to) => {
    this.showTopNav();
    this.setActiveClass(to);
    this.state.go(to);
  };

  showTopNav = () => {
    this.nav = true;
  };

  hideTopNav = () => {
    this.nav = false;
  };

  setActiveClass = (item) => {
    for (let property in this.navObj) {
      if (this.navObj.hasOwnProperty(property)) {
        if (property == item) {
          this.navObj[property].class = 'active';
        } else {
          this.navObj[property].class = '';
        }
      }
    }
  }
  
}

export default ItemsController;
