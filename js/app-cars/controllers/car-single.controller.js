let CarSingleController = function(CarService, $stateParams, MainService) {
  
  let vm = this;

  vm.showImageUpload = false;
  vm.showMainFormNow = false;
  vm.showForm        = showForm;
  vm.uploadImage     = uploadImage;
  vm.showMainForm    = showMainForm;
  vm.addMain         = addMain;

  activate();

  function activate () {
    CarService.getCar($stateParams.id).then( (res) => {
      vm.car = res.data;
    });
  }

  function addMain (mainObj, car) {
    MainService.attachMain(mainObj, car).then( (res) => {
      console.log(res);
    });
  }

  function showForm () {
    vm.showImageUpload = (vm.showImageUpload) ? false : true;
  }

  function showMainForm () {
    vm.showMainFormNow = (vm.showMainFormNow) ? false : true;
  }

  function uploadImage (data) {
    console.log(data);
  }

};

CarSingleController.$inject = ['CarService', '$stateParams', 'MainService'];

export default CarSingleController;