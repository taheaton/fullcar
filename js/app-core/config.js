let config = function($stateProvider, $urlRouterProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/');

  // Set up some States
  $stateProvider
    // Main Root State
    // It is an abstract state because we want a nice way to 
    // manage our layout that will be on all child states
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    // Home State
    .state('root.home', {
      url: '/',
      // Use Controller as Syntax
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    // My Cars
    .state('root.cars', {
      url: '/cars',
      controller: 'CarsController as vm',
      templateUrl: 'templates/app-cars/cars.tpl.html'
    })
    // Add Car
    .state('root.addCar', {
      url: '/cars/add',
      controller: 'CarsAddController as vm',
      templateUrl: 'templates/app-cars/cars-add.tpl.html'
    })
    // Single Car
    .state('root.singleCar', {
      url: '/cars/:id',
      controller: 'CarSingleController as vm',
      templateUrl: 'templates/app-cars/car-single.tpl.html'
    })
    // Signup
    .state('root.signup', {
      url: '/signup',
      controller: 'SignupController as vm',
      templateUrl: 'templates/app-user/signup.tpl.html'
    })
    // Login
    .state('root.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-user/login.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;