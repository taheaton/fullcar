let carItem = function($state, CarService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '='
    },
    template: `
      <div class="panel" ng-click="vm.clicked(car)">
        <h5>{{ car.color }} {{ car.year }} {{ car.make }} {{ car.model }}</h5>
      </div>
    `,
    controller: 'CarsController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.singleCar', { id: scope.car.objectId });
      });
    }
  };

};

carItem.$inject = ['$state', 'CarService'];

export default carItem;