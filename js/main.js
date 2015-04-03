angular.module('typeShare', ['ui.router'])
.factory('getWebFonts', ['$http', function($http){
  return $http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=' + 'AIzaSyBIOrBvYrlj7DRag5mPUJHZzlj-leomMbA') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])
.controller('FontCtrl', ['$scope', 'getWebFonts', function($scope, getWebFonts){
  getWebFonts.success(function(data){
    $scope.getFonts = data;
  })
}])