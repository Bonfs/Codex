
angular.module('codex')
.controller('biblioCtrl', ['$scope','$rootScope', '$cordovaNetwork', function ($scope,$rootScope, $cordovaNetwork) {
	$scope.Bibliotecas = Bibliotecas;
	$scope.alert = alert;
	function TradeId(num){
		id=num;
	}
	$scope.TradeId = TradeId;	
}]);














