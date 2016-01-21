angular.module('codex').controller('livrosAlugadosCtrl', ['$scope', '$cordovaLocalNotification', '$state', '$ionicSideMenuDelegate','storageService', '$ionicPlatform', '$ionicHistory',
	function ($scope, $cordovaLocalNotification, $state, $ionicSideMenuDelegate, storageService, $ionicPlatform, $ionicHistory){
	$scope.livros = storageService.getLivros();	//nome do livro | código | data de devolução
	$scope.dataAtual = new Date();
	$scope.livro = {};
	//var date = new Date();
	//console.log(date);			//date.toLocaleDateString('pt-BR')
	//storageService.limpaRegistro();
	console.log($scope.livros);
	//console.log($state.current.name);

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
		storageService.addLivro({
					nome_livro: livro.nome_livro,
					codigo_livro: livro.codigo_livro,
					data_devolucao: new Date(livro.data_devolucao)
				});
		delete $scope.livro;
	}

	$scope.scheduleSingleNotification = function () {
      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Title here',
        text: 'Text here',
        data: {
          customProperty: 'custom value'
        }
      }).then(function (result) {
        console.log(result);
      });
    };
    console.log($cordovaLocalNotification);

    $scope.goBack = function () {
    	$ionicHistory.goBack();
    }
}])