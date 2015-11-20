let MainService = function(PARSE, $http) {

  let url = PARSE.URL + 'classes/maintenance';
  
  this.attachMain = attachMain;

  function attachMain (mainObj, car) {

    mainObj.car = {
      __type: 'Pointer',
      className: 'car',
      objectId: car.objectId
    };

    return $http.post(url, mainObj, PARSE.CONFIG);
  }

};

MainService.$inject = ['PARSE', '$http'];

export default MainService;