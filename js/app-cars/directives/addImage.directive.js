let addImage = function(CarService, UploadService) {
  
  return {

    restrict: 'E',
    replace: true,
    scope: {
      car: '='
    },
    templateUrl: 'templates/app-cars/upload.tpl.html',
    link: function (scope, element, attrs) {
      element.on('submit', function () {

        let file = element.find('input')[0].files[0];
        UploadService.upload(file).then( (res) => {
          CarService.addImage(res.data.upload.file_url, scope.car)
            .then( (res) => {
              
            });
        });

      });
    }
  };

};

addImage.$inject = ['CarService', 'UploadService'];

export default addImage;