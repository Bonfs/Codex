var IdCurio=1;
var Hora="";
var InfoHora="";
var opacidade = 1.00;
var AnimandoBiblio = 0;
var AnimandoCurio = 0;
function calcHora(){
	 d = new Date;
	 n = d.getDay();
	 Hora=""
	 InfoHora=""
	if(n==7){
		Hora+=ConvertHora(Bibliotecas[id].Hora.Sab[0])+" às "+ConvertHora(Bibliotecas[id].Hora.Sab[1]);
		InfoHora="Sabado";
	}else{
		Hora+=ConvertHora(Bibliotecas[id].Hora.PerLet[0])+" às "+ConvertHora(Bibliotecas[id].Hora.PerLet[1]);
		InfoHora="Segunda à Sexta";
	}	
}
function AlterCurio(Inc){
	IdCurio+=Inc;
	if(IdCurio>=Curiosidades.length){
		IdCurio=0;
	}else if(IdCurio<0){
		IdCurio=Curiosidades.length-1;
	}
}


angular.module('codex')
.controller('homeCtrl',['$scope','$state' ,'$timeout', function ($scope,$state,$timeout){
	var HoraBiblio = document.getElementById('HoraBiblio').getElementsByTagName('p')[0];
	var NomeBiblio = document.getElementById('NomeBiblio').getElementsByTagName('p')[0];
	var Curiosidade= document.getElementById('Curiosidade').getElementsByTagName('p')[0];
	var imgBiblio = document.getElementById('imgBiblio');
	function Atualiza(){

	}
	function AlterBiblio(Inc){
		id+=Inc;
		if(id>=Bibliotecas.length){
			id=0;
		}else if(id<0){
			id=Bibliotecas.length-1;
		}
	}
	function AlterClass(num,Class){
		if(num){
			HoraBiblio.classList.add(Class);
			imgBiblio.classList.add(Class);
			NomeBiblio.classList.add(Class);

		}else if(num==0){
			HoraBiblio.classList.remove(Class);
			imgBiblio.classList.remove(Class);
			NomeBiblio.classList.remove(Class);	
		}
			
	}
	function NextBiblio(){
		if(!AnimandoBiblio){
			AnimandoBiblio=1;
			AlterClass(1,"bounceToLeft");
			AlterBiblio(1);	
			$timeout(function() {
				$scope.Biblioteca=Bibliotecas[id];
			},100);
			setTimeout(function(){
				AlterClass(0,"bounceToLeft");
				AlterClass(1,"bounceFromRight");
				setTimeout(function(){
					AlterClass(0,"bounceFromRight");	
					AnimandoBiblio=0;					
				},500);
			},500);
		}
	}
	
	function PreviewBiblio(){
		if(!AnimandoBiblio){
			AnimandoBiblio=1;
			AlterClass(1,"bounceToRight");
			AlterBiblio(-1);	
			$timeout(function() {
				$scope.Biblioteca=Bibliotecas[id];
			},100);
			setTimeout(function(){
				AlterClass(0,"bounceToRight");
				AlterClass(1,"bounceFromLeft");
				setTimeout(function(){
					AlterClass(0,"bounceFromLeft");	
					AnimandoBiblio=0;					
				},500);
			},500);
		}
	}
	
	function NextCurio(){
		if(!AnimandoCurio){
			AnimandoCurio=1;
			Curiosidade.classList.add("bounceToLeft");
			AlterCurio(1);	
			$timeout(function() {
				$scope.Curiosidade=Curiosidades[IdCurio];
			},100);
			setTimeout(function(){
				Curiosidade.classList.remove("bounceToLeft");
				Curiosidade.classList.add("bounceFromRight");
				setTimeout(function(){
					Curiosidade.classList.remove("bounceFromRight");	
					AnimandoCurio=0;					
				},500);
			},500);
		}

	}
	
	function PreviewCurio(){
		if(!AnimandoCurio){
			AnimandoCurio=1;
			Curiosidade.classList.add("bounceToRight");
			AlterCurio(-1);	
			$timeout(function() {
				$scope.Curiosidade=Curiosidades[IdCurio];
			},100);
			setTimeout(function(){
				Curiosidade.classList.remove("bounceToRight");
				Curiosidade.classList.add("bounceFromLeft");
				setTimeout(function(){
					Curiosidade.classList.remove("bounceFromLeft");	
					AnimandoCurio=0;					
				},500);
			},500);
		}
	}
	
	$scope.Biblioteca=Bibliotecas[id];
	
	$scope.NextBiblio=NextBiblio;
	$scope.PreviewBiblio=PreviewBiblio;
	$scope.NextCurio=NextCurio;
	$scope.PreviewCurio=PreviewCurio;
	
	$scope.Curiosidade=Curiosidades[IdCurio];
	$scope.$on('$ionicView.loaded', function() {
		console.log('carregou');
  		ionic.Platform.ready( function() {
    		if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
  		});
	});
	
	calcHora();
	$scope.Hora = Hora;
	$scope.InfoHora = InfoHora;

}])