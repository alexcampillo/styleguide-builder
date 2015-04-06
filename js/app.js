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
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	  $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: '/home.html',
	      controller: 'MainCtrl'
	    })
	    .state('posts', {
	      url: '/posts/{id}',
	      templateUrl: '/posts.html',
	      controller: 'PostsCtrl'
	    })
	  $urlRouterProvider.otherwise('home');
	}
])