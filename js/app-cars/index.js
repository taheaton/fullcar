import angular from 'angular';
import '../app-core/index';

import CarsController from './controllers/cars.controller';
import CarsAddController from './controllers/cars-add.controller';
import CarSingleController from './controllers/car-single.controller';

import CarService from './services/car.service';
import UploadService from './services/upload.service';
import MainService from './services/maintenance.service';

import carItem from './directives/car.directive';
import addImage from './directives/addImage.directive';

angular
  .module('app.cars', ['app.core'])
  .controller('CarsController', CarsController)
  .controller('CarsAddController', CarsAddController)
  .controller('CarSingleController', CarSingleController)
  .service('CarService', CarService)
  .service('UploadService', UploadService)
  .service('MainService', MainService)
  .directive('carItem', carItem)
  .directive('addImage', addImage)
;