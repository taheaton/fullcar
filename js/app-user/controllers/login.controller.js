let LoginController = function(UserService) {
  
  let vm = this;

  this.login = login;

  function login (userObj) {
    UserService.login(userObj).then( (res) => {
      UserService.storeAuth(res.data);
    });
  }

};

LoginController.$inject = ['UserService'];

export default LoginController;