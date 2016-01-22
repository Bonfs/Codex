var markers=[];
var openedInfo;
var map;
var directionsService = new google.maps.DirectionsService();

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
			markers[openedInfo].info.close();
			document.getElementById("form").style.display = "none";
		}
		openedInfo=this.num;
		document.getElementById("form").style.display = "";
		markers[i].info.open(map,markers[openedInfo]);
	});
	google.maps.event.addListener(markers[i].info,"closeclick", function(){
        document.getElementById("form").style.display = "none";
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
	var GeoBool={};
	
		navigator.geolocation.getCurrentPosition(function (position) {
		GeoBool=position;
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