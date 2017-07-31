var app = angular.module('galPhoto',['ngRoute','ngResource','bootstrapLightbox']);
app.config(['$routeProvider',function($routeProvider) {
$routeProvider.
when('/gallery',{
	templateUrl: 'views/gallery.view.html',
	contrillr: 'GalleryCtrl'
})
.otherwise({redirectTo: '/gallery'});

}]);