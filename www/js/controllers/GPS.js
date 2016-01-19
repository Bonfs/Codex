var markers=[];
var openedInfo;
var map;
var directionsService = new google.maps.DirectionsService();

function createMarker(i,latlng,nome,descr){
	markers[i] = undefined;
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
			markers[openedInfo].info.close();
		}
		openedInfo=this.num;
		markers[i].info.open(map,markers[openedInfo]);
	});
}

for (var i = 0; i < Bibliotecas.length; i++){
	createMarker(i,new google.maps.LatLng(Bibliotecas[i].lat, Bibliotecas[i].lng),Bibliotecas[i].nome,Bibliotecas[i].descricao);
}

function initializeMap() {	
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
		zoom:15,
		center:markers[0].position,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false
		};
		map = new google.maps.Map(document.getElementById("map_content"),options);
		for (var i = 0; i < Bibliotecas.length; i++){
			createMarker(i,new google.maps.LatLng(Bibliotecas[i].lat,Bibliotecas[i].lng),Bibliotecas[i].nome,Bibliotecas[i].descr);
			markers[i].setMap(map);
		}
		
	}

}
function TracaRota(origem,i){
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
		
		if(document.getElementById("route_from").value==""){
			markers[i].setMap(map);
		}
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
	//if (navigator.geolocation) { 
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
		);
   });
	//}else{}	
}