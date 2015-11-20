import angular from 'angular';

import LoginController from './controllers/login.controller';
import SignupController from './controllers/signup.controller';

import UserService from './services/user.service';

angular
  .module('app.user', ['app.core'])
  .controller('SignupController', SignupController)
  .controller('LoginController', LoginController)
  .service('UserService', UserService)
;