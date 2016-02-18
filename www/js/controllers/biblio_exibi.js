
function ConvertHora(num){
	var Hora="";
	var resto = 60*(num - Math.floor(num));
	num = Math.floor(num);
	if((num/10)<1){
		Hora="0"+num;
	}else{
		Hora=""+num;
	}
	if((resto/10)<1){
		Hora+=":"+"0"+resto;
	}else{
		Hora+=":"+resto;
	}
	return Hora;
}
function ConvertTelefone(Tel){
	var DDD;
	if(Tel/100000000000>0){
		DDD=Math.floor(Tel/100000000);
		Tel=Tel-(DDD*100000000);
	}else if(Tel/10000000000>0){
		DDD=Math.floor(Tel/10000000);
		Tel=Tel-(DDD*100000000);
	}
	var Tel1 = Math.floor(Tel/10000);
	var Tel2 = Tel - (Tel1*10000);
	var StrinTel = "("+DDD+")"+Tel1+"-"+Tel2;
	return StrinTel;
}
angular.module('codex')
.controller('biblio_Exibi_Ctrl', ['$scope','$ionicHistory',function ($scope,$ionicHistory) {		
var d = new Date;
var n = d.getDay();
var Hora="";
var InfoHora="";	
	
$scope.goBack = function () {
	$ionicHistory.goBack();
}
$scope.$on('$ionicView.enter', function(){
	$scope.Biblioteca = Bibliotecas[id];
	$scope.sigla = Sigla
	$scope.ConvertTel = ConvertTelefone;
	$scope.ConvertHora = ConvertHora;
	$scope.Email = Bibliotecas[id].email;
	$scope.Tel = Bibliotecas[id].Telefone;
	if(n==7){
		Hora+=ConvertHora(Bibliotecas[id].Hora.Sab[0])+" às "+ConvertHora(Bibliotecas[id].Hora.Sab[1]);
		InfoHora="Sabado";
	}else{
		Hora+=ConvertHora(Bibliotecas[id].Hora.PerLet[0])+" às "+ConvertHora(Bibliotecas[id].Hora.PerLet[1]);
		InfoHora="Segunda à Sexta";
	}
	$scope.Hora = Hora;
	$scope.InfoHora = InfoHora;
});
		
}]);
