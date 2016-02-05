
angular.module('codex')
.controller('biblioCtrl', ['$scope','$rootScope', '$cordovaNetwork', function ($scope,$rootScope, $cordovaNetwork) {
	$scope.Bibliotecas = Bibliotecas;
	function TradeId(num){
		id=num;
	}
	$scope.TradeId = TradeId;	
}]);














