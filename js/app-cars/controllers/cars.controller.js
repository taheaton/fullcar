let CarsController = function(CarService) {
  
  let vm = this;

  vm.cars = [];
  vm.clicked = clicked;

  activate();

  function activate () {
    CarService.getAllCars().then( (res) => {
      vm.cars = res.data.results;
    });
  }

  function clicked (car) {
    console.log('clicked', car.name);
  }
  
};

CarsController.$inject = ['CarService'];

export default CarsController;