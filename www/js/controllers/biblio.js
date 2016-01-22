var id = 2;	
var GeoBool;

// ionic build android
angular.module('codex')
.controller('biblio_GPS_Ctrl', ['$scope','$ionicHistory', '$ionicPopup', '$timeout', function ($scope,$ionicHistory, $ionicPopup, $timeout) {
		ErrorGPS = function(){
        var alertPopup = $ionicPopup.alert({
				title: 'Gps Fraco ou Desativado',
				 template: 'Error ao identificar Geolocalização,sinal do serviço de geolocalização pode estar fraco ou desligado,favor veficar se o  está ligado'
        });
		}
		ErrorConecNet = function(){
        var alertPopup = $ionicPopup.alert({
				title: 'Internet Desativada',
				 template: 'Error ao conectar com internet,favor veficar se a internet está ligada'
        });
		}
		$scope.Bibliotecas = Bibliotecas;
		$scope.markers = markers;
		/*initializeMap();
		$scope.$on('$ionicView.loaded', function(){
			initializeMap();
		});*/
		
		$scope.$on('$ionicView.enter', function(){
			if(navigator.connection.type == Connection.NONE){
				ErrorConecNet();
				$ionicHistory.goBack();
			}else{
				initializeMap();
			}
		});

}]);

angular.module('codex')
.controller('biblioCtrl', ['$scope','$rootScope', '$cordovaNetwork', function ($scope,$rootScope, $cordovaNetwork) {
	$scope.Bibliotecas = Bibliotecas;
	$scope.alert = alert;
	function TradeId(num){
		id=num;
	}
	$scope.TradeId = TradeId;	
}]);














