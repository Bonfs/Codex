angular.module('codex')
.controller('biblio_Exibi_Ctrl', ['$scope', 'storageService', '$state', '$ionicSideMenuDelegate', function ($scope,$rootScope,$state, $stateParams) {
		$scope.Bibliotecas = Bibliotecas[id];
		$scope.ConvertTel = ConvertTelefone(Bibliotecas[id].Telefone);
		$scope.Email = Bibliotecas[id].email;
		
		var d = new Date;
		var n = d.getDay();
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
		var Hora="";	
		if(n==0){
			Hora+=ConvertHora(Bibliotecas[id].Hora.Domingo_Abre)+" às "+ConvertHora(Bibliotecas[id].Hora.Domingo_Fecha);
		}else if(n==7){
			Hora+=ConvertHora(Bibliotecas[id].Hora.Sabado_Abre)+" às "+ConvertHora(Bibliotecas[id].Hora.Sabado_Fecha);
		}else{
			Hora+=ConvertHora(Bibliotecas[id].Hora.Semana_Abre)+" às "+ConvertHora(Bibliotecas[id].Hora.Semana_Fecha);
		}
		$scope.Hora = Hora;
}]);