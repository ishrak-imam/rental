class AppController {
  constructor(device) {
    'ngInject';
    this.device = device;
  }

  $onInit() {
    if(this.device.isMobile()) {
      this.mobile = true;
    } else {
      this.pc = true;
    }
  }
}

export default AppController;
