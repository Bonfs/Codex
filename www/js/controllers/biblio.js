var id = -1;	

// ionic build android
angular.module('codex')
.controller('biblio_GPS_Ctrl', ['$scope', function ($scope) {

	$scope.Bibliotecas = Bibliotecas;
	alert(Bibliotecas.length);
	$scope.markers = markers;
	/*initializeMap();
	$scope.$on('$ionicView.loaded', function(){
		initializeMap();
	});*/

	$scope.$on('$ionicView.enter', function(){
			alert("Till Now all right");
			for (var i = 0; i < Bibliotecas.length; i++){
				createMarker(i,new google.maps.LatLng(Bibliotecas[i].lat, Bibliotecas[i].lng),Bibliotecas[i].nome,Bibliotecas[i].descricao);
			}
			alert("Part2");
		initializeMap();
	});
	
}]);

angular.module('codex')
.controller('biblioCtrl', ['$scope', function ($scope) {
	$scope.Bibliotecas = Bibliotecas;
	function TradeId(num){
		id=num;
	}
	$scope.TradeId = TradeId;
}]);














