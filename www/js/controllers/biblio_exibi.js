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
function closePopUp(){
	$('.pop-up').css('display','none');
	$('#back').css('display','none');
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
		
		$scope.myGoBack = function() {
			$ionicHistory.goBack();
		};
		var d = new Date;
		var n = d.getDay();
		$scope.$on('$ionicView.enter', function(){
			$('#Tels').css('display','block');
			if(Bibliotecas[id].Telefone.length>1){
				$('#Tels').css('display','block');
				$('#Tel').css('display','none');
			}else if(Bibliotecas[id].Telefone.length>0){
				$('#Tel').css('display','block');
				if(!(Bibliotecas[id].Telefone.descr=="")){
					$('#Tel div#descr').css('display','none');
				}
				$('#Tels').css('display','none');
			}
			
			$scope.Biblioteca = Bibliotecas[id];
			$scope.ConvertTel = ConvertTelefone;
			$scope.ConvertHora = ConvertHora;
			$scope.Email = Bibliotecas[id].email;
			$scope.Tel = Bibliotecas[id].Telefone;
			$scope.HoraVet = Bibliotecas[id].HoraVet;
			
			d = new Date;
			n = d.getDay();
			var Hora="";
			var InfoHora="";			
			if(n==0){
				Hora+=ConvertHora(Bibliotecas[id].Hora.Domingo_Abre)+" às "+ConvertHora(Bibliotecas[id].Hora.Domingo_Fecha);
				InfoHora="Domingo";
			}else if(n==7){
				Hora+=ConvertHora(Bibliotecas[id].Hora.Sabado_Abre)+" às "+ConvertHora(Bibliotecas[id].Hora.Sabado_Fecha);
				InfoHora="Sabado";
			}else{
				Hora+=ConvertHora(Bibliotecas[id].Hora.PerLet[0])+" às "+ConvertHora(Bibliotecas[id].Hora.PerLet[1]);
				InfoHora="Segunda à Sexta";
			}
			$scope.Hora = Hora;
			$scope.InfoHora = InfoHora;

			var NoOp = 0;
			if(Bibliotecas[id].Hora.PerLet == undefined){
				$('.PerLet').css('display','none');NoOp++;
			}
			if(Bibliotecas[id].Hora.PerRecEsc == undefined){
				$('.PerRecEsc').css('display','none');NoOp++;
			}
			if(Bibliotecas[id].Hora.Sab == undefined){
				$('.Sab').css('display','none');NoOp++;
			}
			if(NoOp == 3){
				$('#Hora').css('display','none');
			}
			
		});
		
}]);
