angular.module('codex')
.controller('homeCtrl', ['$scope', function ($scope){
	$scope.$on('$ionicView.loaded', function() {
		console.log('carregou');
  		ionic.Platform.ready( function() {
    		if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
  		});
	});
}])