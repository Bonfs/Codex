angular.module('codex').controller('livrosAlugadosCtrl', ['$scope', '$cordovaLocalNotification', '$state', '$ionicSideMenuDelegate', 'storageService', '$ionicPlatform', '$ionicHistory', '$timeout', '$ionicPopup',
	function ($scope, $cordovaLocalNotification, $state, $ionicSideMenuDelegate, storageService, $ionicPlatform, $ionicHistory, $timeout, $ionicPopup){
	$scope.livros = storageService.getLivros();	//nome do livro | código | data de devolução
	$scope.dataAtual = new Date();
	$scope.livro = {};
	$scope.bibliotecas = Bibliotecas;
	//impede que a tela de adicionar livro seja arrastada
	// if($state.current.name == 'app.addLivro')
	// {
	//     $ionicSideMenuDelegate.canDragContent(false);
	// }
	// else
	// {
	//     $ionicSideMenuDelegate.canDragContent(true);
	// }

	$scope.addLivro = addLivro;
	function addLivro (livro)
	{
		var dataDev = new Date(livro.data_devolucao);
		dataDev.setHours(12);
		dataDev.setMinutes(0);
		// console.log(dataDev);
		storageService.addLivro({
					nome_livro: livro.nome_livro,
					biblioteca_livro: livro.biblioteca_livro.sigla,
					data_devolucao: dataDev
				});
		delete $scope.livro;
		var alertSalvarLivro = $ionicPopup.alert({
			title: 'Livro adicionado com sucesso!',
			template: ''
		})
		alertSalvarLivro.then(function (res){
			console.log('Deu certo!')
		});
	}

	$scope.removeLivro = removeLivro;
	function removeLivro (livro)
	{
		storageService.removeLivro(livro);
	}

$scope.goBack = function () {
  	$ionicHistory.goBack();
  }
}])
