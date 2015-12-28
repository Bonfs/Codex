angular.module('codex')
.controller('livrosAlugadosCtrl', ['$scope', 'storageService', '$state', '$ionicSideMenuDelegate', function ($scope, storageService, $state, $ionicSideMenuDelegate) {
	$scope.teste = 'ADICIONA LIVROS AO REGISTRO LOCAL!';
	$scope.livros = storageService.getAllLivros();
	$scope.livro = {};
	$scope.dataAtual = new Date();
	//storageService.deleteLivros();
	console.log($scope.livros);
	if($state.current.name == 'app.addLivrosAlugados')
	{
		$ionicSideMenuDelegate.canDragContent(false);
	}
	else
	{
		$ionicSideMenuDelegate.canDragContent(true);	
	}

	$scope.addLivro = addLivro;
	function addLivro (livro)
	{
		storageService.addLivro({
			nome_livro: $scope.livro.nome_livro,
			codigo_livro: $scope.livro.codigo_livro,
			data_devolucao: new Date($scope.livro.data_devolucao)
		})
		delete $scope.livro;
	}
}])