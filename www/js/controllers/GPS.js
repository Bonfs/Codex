var markers=[];
var openedInfo;
var map;
var directionsService = new google.maps.DirectionsService();
var id = 0;	

function closeMarkers(){
	markers[openedInfo].info.close();
	$(".pac-container").css('display','none');
	$(".filter-bar-in").addClass("filter-bar-out");
	$(".filter-bar-in").removeClass("filter-bar-in");
	$("#route_from").val("");
	setTimeout(function(){$(".filter-bar").css('height','0');},500)
	openedInfo=undefined;
}

function createMarker(i,latlng,nome,descr){
	markers[i] = new google.maps.Marker({
		title: nome,
		//icon: "../../img/marker.png",
		position: latlng
	});
	markers[i].num=i;
	markers[i].discription=descr+"<br /> <input type='button' name='Barra' value='Traçar rota até aqui' onclick='Geo("+i+")' />";
	markers[i].info = new google.maps.InfoWindow({content: markers[i].discription});
	markers[i].addListener('click',function(){
		if(openedInfo!=undefined){
			closeMarkers();
		}
		
		if (!$(".filter-bar-wrapper").hasClass( "filter-bar-in" )){
			$(".filter-bar-wrapper").addClass("filter-bar-in");
		}else{			
			$("div.filter-bar-out").addClass("filter-bar-in");
			$("div.filter-bar-out").removeClass("filter-bar-out");
		}
		$(".filter-bar").css('height',$('ion-header-bar').height());
		openedInfo=this.num;
		id=this.num;
		AtualizaBiblio();
		markers[i].info.open(map,markers[openedInfo]);
		
	});
	
	google.maps.event.addListener(markers[i].info,"closeclick", function(){
		closeMarkers();
    })
	
}

function initializeMap() {	
	for (var i = 0; i < Bibliotecas.length; i++){
		createMarker(i,new google.maps.LatLng(Bibliotecas[i].lat, Bibliotecas[i].lng),Bibliotecas[i].nome,Bibliotecas[i].nome);
	}
	
	if(id>=0){
		options = {
			zoom:15,
			center:markers[id].position,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false
		};
		map = new google.maps.Map(document.getElementById("map_content"),options);
		
		markers[id].setMap(map);	
	}else{
		options = {
		zoom:14,
		center:markers[6].position,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false
		};
		map = new google.maps.Map(document.getElementById("map_content"),options);
		for (var i = 0; i < Bibliotecas.length; i++){
			markers[i].setMap(map);
		}
	}
	
}
function TracaRota(origem,i){
	if(origem==undefined){
		origem=$('#route_from').val();
	}
	if(i==undefined){
		i=openedInfo;
	}
	var directionsDisplay = new google.maps.DirectionsRenderer();
	markers[i].setMap();
	var request = {
		origin: origem,
		destination:markers[i].position,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(response, status){
		options = {
			zoom:15,
			center:markers[i].position,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false
		};
		map = new google.maps.Map(document.getElementById("map_content"),options);
			markers[i].setMap(map);
		if(status == google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(response);
			directionsDisplay.setMap(map);
		}
	});
	return false;
}
function Geo(i){
	markers[openedInfo].info.close();
	var origem;
	
		navigator.geolocation.getCurrentPosition(function (position) {
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({
			"location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
			},
			function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					origem=results[0].formatted_address;
					TracaRota(origem,i);
				}
			}
		)},ErrorGPS,{timeout:5000});
}


// ionic build android
angular.module('codex')
.controller('biblio_GPS_Ctrl', ['$scope','$ionicHistory', '$ionicPopup','$ionicFilterBar', function ($scope,$ionicHistory, $ionicPopup,$ionicFilterBar ) {
	$scope.Biblioteca = Bibliotecas[id];
	$scope.closeMarkers=closeMarkers;
	$scope.Bibliotecas = Bibliotecas;
	
	AtualizaBiblio = function(){
		$scope.Biblioteca = Bibliotecas[id];
		$('#route_from').attr('placeholder',"Endereço de Origem para "+Bibliotecas[id].sigla )
	}
	
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
	
	$scope.$on('$ionicView.enter', function(){
		/*if(navigator.connection.type == Connection.NONE){
			ErrorConecNet();
			$ionicHistory.goBack();
		}else{*/
			initializeMap();
		//}
	});
	
	var input = $('#route_from')[0];
	var autocomplete = new google.maps.places.Autocomplete(input,{componentRestrictions:{'country': 'br'}});
	autocomplete.addListener('place_changed', function(){
		//alert(place.address_components[0].long_name);
		TracaRota();
	});
	
}]);