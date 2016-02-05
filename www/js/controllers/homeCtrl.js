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
function AlterBiblio(Inc){
	id+=Inc;
	if(id>=Bibliotecas.length){
		id=0;
	}else if(id<0){
		id=Bibliotecas.length-1;
	}
}

angular.module('codex')
.controller('homeCtrl',['$scope','$state' , function ($scope,$state){
	var HoraBiblio = document.getElementById('HoraBiblio').getElementsByTagName('p')[0];
	var NomeBiblio = document.getElementById('NomeBiblio').getElementsByTagName('p')[0];
	var Curiosidade= document.getElementById('Curiosidade').getElementsByTagName('p')[0];
	var imgBiblio = document.getElementById('imgBiblio');
	
	function NextBiblio(){
		if(!AnimandoBiblio){
			AnimandoBiblio=1;
			AlterBiblio(1);
			

			
			HoraBiblio.classList.add("bounceLeft");
			imgBiblio.classList.add("bounceLeft");
			NomeBiblio.classList.add("bounceLeft");
			
			$scope.Biblioteca=Bibliotecas[id];
			calcHora();
			$scope.Hora = Hora;
			$scope.InfoHora = InfoHora;
			
			 setTimeout(function(){
				HoraBiblio.classList.remove("bounceLeft");
				imgBiblio.classList.remove("bounceLeft");
				NomeBiblio.classList.remove("bounceLeft");
				AnimandoBiblio=0;
			}, 1005);
			
		}

	}
	
	function PreviewBiblio(){
		if(!AnimandoBiblio){
			AnimandoBiblio=1;
			AlterBiblio(-1);
			
			HoraBiblio.classList.add("bounceRight");
			imgBiblio.classList.add("bounceRight");
			NomeBiblio.classList.add("bounceRight");
			
			$scope.Biblioteca=Bibliotecas[id];
			calcHora();
			$scope.Hora = Hora;
			$scope.InfoHora = InfoHora;
			
			setTimeout(function(){
				HoraBiblio.classList.remove("bounceRight");
				imgBiblio.classList.remove("bounceRight");
				NomeBiblio.classList.remove("bounceRight");
				AnimandoBiblio=0;
			}, 1005);
		}
	}
	
	function NextCurio(){
		if(!AnimandoCurio){
			AnimandoCurio=1;
			AlterCurio(1);
			Curiosidade.classList.add("bounceLeft");
			$scope.Curiosidade=Curiosidades[IdCurio];
			 setTimeout(function(){
				Curiosidade.classList.remove("bounceLeft");
				AnimandoCurio=0;
			}, 1005);
			
		}

	}
	
	function PreviewCurio(){
		if(!AnimandoCurio){
			AnimandoCurio=1;
			AlterCurio(-1);
			
			Curiosidade.classList.add("bounceRight");
			$scope.Curiosidade=Curiosidades[IdCurio];
			setTimeout(function(){
				Curiosidade.classList.remove("bounceRight");
				AnimandoCurio=0;
			}, 1005);
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