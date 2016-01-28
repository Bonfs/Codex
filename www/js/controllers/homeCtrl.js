angular.module('codex')
.controller('homeCtrl', ['$scope' ,'$ionicSlideBoxDelegate', function ($scope, $ionicSlideBoxDelegate){
	$scope.bibliotecas = Bibliotecas;
	$scope.$on('$ionicView.loaded', function() {
		console.log('carregou');
  		ionic.Platform.ready( function() {
    		if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
  		});
	});

	 $scope.nextSlide = function() {
	    $ionicSlideBoxDelegate.next();
	  }
}])