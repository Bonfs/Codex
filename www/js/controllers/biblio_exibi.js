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
function resizeScreen(){
	if(window.screen.availWidth>window.screen.availHeight){
		$('#img-Biblio-Exibi').width(window.screen.availWidth/2);
		$('#img-Biblio-Exibi').css('margin-left','25vw');
	}else{
		$('#img-Biblio-Exibi').width(window.screen.availWidth);
		$('#img-Biblio-Exibi').css('margin-left','0vw');
	}
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
			$scope.Bibliotecas = Bibliotecas[id];
			$scope.ConvertTel = ConvertTelefone;
			$scope.Email = Bibliotecas[id].email;
			$scope.Tel = Bibliotecas[id].Telefone;
			d = new Date;
			n = d.getDay();
			var Hora="";	
			if(n==0){
				Hora+=ConvertHora(Bibliotecas[id].Hora.Domingo_Abre)+" às "+ConvertHora(Bibliotecas[id].Hora.Domingo_Fecha);
			}else if(n==7){
				Hora+=ConvertHora(Bibliotecas[id].Hora.Sabado_Abre)+" às "+ConvertHora(Bibliotecas[id].Hora.Sabado_Fecha);
			}else{
				Hora+=ConvertHora(Bibliotecas[id].Hora.PerLet[0])+" às "+ConvertHora(Bibliotecas[id].Hora.PerLet[1]);
			}
			$scope.Hora = Hora;
			resizeScreen();
		});
		
		$(window).bind('resize', function() {
			resizeScreen();
		});
		
}]);
