angular.module('codex').controller('buscaCtrl', ['$scope', '$ionicHistory', function ($scope, $ionicHistory){
	$scope.titulo = 'Livros';
	$scope.livros = [
			{id: 1, nome_livro: 'Livro 1', codigo: '333f.8', autor: 'M. Bonfim', ano: 1999},
			{id: 2, nome_livro: 'Livro 2', codigo: '443f.20', autor: 'BONFIM', ano: 2000},
			{id: 3, nome_livro: 'Criataruas Mágicas e Onde Habitam', codigo: '520.a5', autor: 'J.K. Rowling', ano: 2005}
		];
}])