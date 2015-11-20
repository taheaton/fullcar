let CarsAddController = function(CarService) {
  
  let vm = this;

  vm.addCar = addCar;

  function addCar (carObj) {
    CarService.addCar(carObj).then( (res) => {
      console.log(res);
    });
  }

};

CarsAddController.$inject = ['CarService'];

export default CarsAddController;