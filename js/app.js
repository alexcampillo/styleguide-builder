angular.module('typeShare', ['ui.router'])
.factory('getWebFonts', ['$http', function($http){
  return $http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR-API-KEY') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])
.controller('MainCtrl', ['$scope', function($scope){

}])