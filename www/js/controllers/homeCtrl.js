var IdCurio=1;
var Hora="";
var InfoHora="";
var opacidade = 1.00;
var AnimandoBiblio = 0;
var AnimandoCurio = 0;
function calcHora(){
	 d = new Date;
	 n = d.getDay();
	 var HoraCom=[];
	 Hora=""
	 InfoHora=""
	if(n==7){
		Hora+=ConvertHora(Bibliotecas[id].Hora.Sab[0])+" às "+ConvertHora(Bibliotecas[id].Hora.Sab[1]);
		InfoHora="Sabado";
	}else{
		Hora+=ConvertHora(Bibliotecas[id].Hora.PerLet[0])+" às "+ConvertHora(Bibliotecas[id].Hora.PerLet[1]);
		InfoHora="Segunda à Sexta";
	}	
	HoraCom[0]=Hora;
	HoraCom[1]=InfoHora;
	return HoraCom;
}
function AlterCurio(Inc){
	IdCurio+=Inc;
	if(IdCurio>=Curiosidades.length){
		IdCurio=0;
	}else if(IdCurio<0){
		IdCurio=Curiosidades.length-1;
	}
}
function Sigla(VarString){
	var Upcase="";
	for(var i=0;i<VarString.length;i++){
	if(VarString[i].charCodeAt(0)>=65 && VarString[i].charCodeAt(0)<=90){
		Upcase+=VarString[i]
	}
	}
	if (Upcase!=""){
		return Upcase	
	}
	return 0;
}

angular.module('codex')
.controller('homeCtrl',['$scope','$state' ,'$timeout', '$ionicNavBarDelegate', function ($scope,$state,$timeout, $ionicNavBarDelegate){
	
var HoraBiblio = document.getElementById('HoraBiblio').getElementsByTagName('p')[0];
var NomeBiblio = document.getElementById('NomeBiblio').getElementsByTagName('p')[0];
var Curiosidade= document.getElementById('Curiosidade').getElementsByTagName('p')[0];
var imgBiblio = document.getElementById('imgBiblio');

function AlterBiblio(Inc){
	id+=Inc;
	if(id>=Bibliotecas.length){
		id=0;
	}else if(id<0){
		id=Bibliotecas.length-1;
	}
	if(Bibliotecas[id].sigla!=undefined){
		$scope.sigla = Bibliotecas[id].sigla
	}else{
		$scope.sigla = Sigla(Bibliotecas[id].nome)
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
	
	$scope.$on('$ionicView.enter', function()
	{
		//console.log('teste centro');
	    $timeout(function()
	    {
	        $ionicNavBarDelegate.align('center');
	    });
	});
	function Atualiza(){

	}

	
	$scope.Biblioteca=Bibliotecas[id];
	
	if(Bibliotecas[id].sigla!=undefined){
		$scope.sigla = Bibliotecas[id].sigla
	}else{
		$scope.sigla = Sigla(Bibliotecas[id].nome)
	}
	
	
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