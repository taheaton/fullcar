let SignupController = function(UserService) {
  
  let vm = this;

  vm.signUp   = signUp;


  function signUp (user) {
    UserService.signup(user).then( (res) => {
      UserService.storeAuth(res.data);
    });
  }
  

};

SignupController.$inject = ['UserService'];

export default SignupController;