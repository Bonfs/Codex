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
	if(document.getElementsByClassName('pop-up')[0].style.display != 'none'){
		document.getElementsByClassName('pop-up')[0].style.display = 'none';
	}
	if(document.getElementsByClassName('pop-up')[1].style.display != 'none'){
		document.getElementsByClassName('pop-up')[1].style.display = 'none';
	}
	document.getElementById('back').style.display = 'none';
}
function openPopUp(n){
	document.getElementById('back').style.display = 'block';
	document.getElementsByClassName('pop-up')[n].style.display = 'block';
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
		var Tels = document.getElementById('Tels');
		var Tel = document.getElementById('Tel');
		
		$scope.$on('$ionicView.enter', function(){
			
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
			
			if(n==7){
				Hora+=ConvertHora(Bibliotecas[id].Hora.Sab[0])+" às "+ConvertHora(Bibliotecas[id].Hora.Sab[1]);
				InfoHora="Sabado";
			}else{
				Hora+=ConvertHora(Bibliotecas[id].Hora.PerLet[0])+" às "+ConvertHora(Bibliotecas[id].Hora.PerLet[1]);
				InfoHora="Segunda à Sexta";
			}
			$scope.Hora = Hora;
			$scope.InfoHora = InfoHora;

			
			var NoOp = 0;
			if(Bibliotecas[id].Hora.PerLet == undefined){
				document.getElementsByClassName('PerLet')[0].style.display = 'none';
				document.getElementsByClassName('PerLet')[1].style.display = 'none';
				NoOp++;
			}
			if(Bibliotecas[id].Hora.PerRecEsc == undefined){
				document.getElementsByClassName('PerRecEsc')[0].style.display = 'none';
				document.getElementsByClassName('PerRecEsc')[1].style.display = 'none';
				NoOp++;
			}
			if(Bibliotecas[id].Hora.Sab == undefined){
				document.getElementsByClassName('Sab')[0].style.display = 'none';
				document.getElementsByClassName('Sab')[1].style.display = 'none';
				NoOp++;
			}
			if(NoOp == 3){
				document.getElementById('Hora').style.display = 'none';
			}
			
		});
		
}]);
