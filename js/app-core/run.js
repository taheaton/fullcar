let run = function(UserService, $rootScope) {

  $rootScope.$on('$stateChangeSuccess', function (event, data) {
    UserService.checkAuth();
  });

};

run.$inject = ['UserService', '$rootScope'];

export default run;