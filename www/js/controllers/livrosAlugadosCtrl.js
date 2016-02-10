angular.module('codex').controller('livrosAlugadosCtrl', ['$scope', '$cordovaLocalNotification', '$state', '$ionicSideMenuDelegate', 'storageService', '$ionicPlatform', '$ionicHistory', '$timeout',
	function ($scope, $cordovaLocalNotification, $state, $ionicSideMenuDelegate, storageService, $ionicPlatform, $ionicHistory, $timeout){
	$scope.livros = storageService.getLivros();	//nome do livro | código | data de devolução
	$scope.dataAtual = new Date();
	$scope.livro = {};
	//var date = new Date();
	//console.log(date);			//date.toLocaleDateString('pt-BR')
	//storageService.limpaRegistro();
	//console.log($scope.livros);
	//console.log($state.current.name);
	$scope.bibliotecas = Bibliotecas;
	//console.log($scope.bibliotecas[0].sigla);
	//impede que o menu abra arrastando
	if($state.current.name == 'app.addLivro')
	{
	    $ionicSideMenuDelegate.canDragContent(false);
	}
	else
	{
	    $ionicSideMenuDelegate.canDragContent(true);
	}

	//console.log($scope.addLivroForm);
	$scope.addLivro = addLivro;
	function addLivro (livro)
	{
		var dataDev = new Date(livro.data_devolucao);
		dataDev.setHours(12);
		dataDev.setMinutes(0);
		console.log(dataDev);
		storageService.addLivro({
					nome_livro: livro.nome_livro,
					biblioteca_livro: livro.biblioteca_livro.sigla,
					data_devolucao: dataDev
				});
		delete $scope.livro;
	}

	$scope.removeLivro = removeLivro;
	function removeLivro (livro)
	{
		storageService.removeLivro(livro);
	}

	//agenda uma notificação para daqui a 10 segundos
	$scope.scheduleDelayedNotification = function () {
          var now = new Date().getTime();
          var _10SecondsFromNow = new Date(now + 10 * 1000);
 
          $cordovaLocalNotification.schedule({
            id: 2,
            title: 'Warning',
            text: 'Im so late',
            at: _10SecondsFromNow
          }).then(function (result) {
            console.log('Notification 2 triggered');
          });
        };
    //console.log($cordovaLocalNotification);

    $scope.goBack = function () {
    	$ionicHistory.goBack();
    }
}])