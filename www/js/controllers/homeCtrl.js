var IdBiblio=0;
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
		Hora+=ConvertHora(Bibliotecas[IdBiblio].Hora.Sab[0])+" às "+ConvertHora(Bibliotecas[IdBiblio].Hora.Sab[1]);
		InfoHora="Sabado";
	}else{
		Hora+=ConvertHora(Bibliotecas[IdBiblio].Hora.PerLet[0])+" às "+ConvertHora(Bibliotecas[IdBiblio].Hora.PerLet[1]);
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
	IdBiblio+=Inc;
	if(IdBiblio>=Bibliotecas.length){
		IdBiblio=0;
	}else if(IdBiblio<0){
		IdBiblio=Bibliotecas.length-1;
	}
	
}

angular.module('codex')
.controller('homeCtrl',['$scope','$state' , function ($scope,$state){
	function NextBiblio(){
		if(!AnimandoBiblio){
			AnimandoBiblio=1;
			AlterBiblio(1);
			
			$( "#HoraBiblio p" ).addClass("bounceLeft");
			$( "#imgBiblio" ).addClass("bounceRight");
			$( "#NomeBiblio p" ).addClass("bounceLeft");
			
			$scope.Biblioteca=Bibliotecas[IdBiblio];
			calcHora();
			$scope.Hora = Hora;
			$scope.InfoHora = InfoHora;
			
			 setTimeout(function(){
				$( "#HoraBiblio p" ).removeClass("bounceLeft");
				$( "#imgBiblio" ).removeClass("bounceRight");
				$( "#NomeBiblio p" ).removeClass("bounceLeft");
				AnimandoBiblio=0;
			}, 1005);
			
		}

	}
	
	function PreviewBiblio(){
		if(!AnimandoBiblio){
			AnimandoBiblio=1;
			AlterBiblio(-1);
			
			$( "#HoraBiblio p" ).addClass("bounceRight");
			$( "#imgBiblio" ).addClass("bounceLeft");
			$( "#NomeBiblio p" ).addClass("bounceRight");
			
			$scope.Biblioteca=Bibliotecas[IdBiblio];
			calcHora();
			$scope.Hora = Hora;
			$scope.InfoHora = InfoHora;
			
			setTimeout(function(){
				$( "#HoraBiblio p" ).removeClass("bounceRight");
				$( "#imgBiblio" ).removeClass("bounceLeft");
				$( "#NomeBiblio p" ).removeClass("bounceRight");
				AnimandoBiblio=0;
			}, 1005);
		}
	}
	
	function NextCurio(){
		if(!AnimandoCurio){
			AnimandoCurio=1;
			AlterCurio(1);
			$( "#Curiosidade p" ).addClass("bounceLeft");
			$scope.Curiosidade=Curiosidades[IdCurio];
			 setTimeout(function(){
				$( "#Curiosidade p" ).removeClass("bounceLeft");
				AnimandoCurio=0;
			}, 1005);
			
		}

	}
	
	function PreviewCurio(){
		if(!AnimandoCurio){
			AnimandoCurio=1;
			AlterCurio(-1);
			
			$( "#Curiosidade p" ).addClass("bounceRight");
			$scope.Curiosidade=Curiosidades[IdCurio];
			setTimeout(function(){
				$( "#Curiosidade p" ).removeClass("bounceRight");
				AnimandoCurio=0;
			}, 1005);
		}
	}
	
	$scope.Biblioteca=Bibliotecas[IdBiblio];
	
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