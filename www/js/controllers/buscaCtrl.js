angular.module('codex').controller('buscaCtrl', ['$scope', '$ionicHistory', function ($scope, $ionicHistory){
	$scope.teste = function ()
	{
		console.log($ionicHistory.viewHistory().views);
		//console.log($ionicHistory.viewHistory().histories);
		//$ionicHistory.backView();
	}
}])