angular.module('typeShare', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/index.html',
        controller: 'FontCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      })
    $urlRouterProvider.otherwise('home');
  }
])
.factory('getWebFonts', ['$http', function($http){
  return $http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=' + 'AIzaSyBIOrBvYrlj7DRag5mPUJHZzlj-leomMbA') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])
.controller('FontsCtrl', ['$scope', 'getWebFonts', function($scope, getWebFonts){
  getWebFonts.success(function(data){
    $scope.getFonts = data;
  })
}])
.controller('PostsCtrl', ['$scope', function($scope) {

}])
