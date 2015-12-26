angular.module('codex')
.controller('livrosAlugadosCtrl', ['$scope', 'storageService', function ($scope, storageService) {
	$scope.teste = 'TESTE';
	$scope.livros = storageService.getAllLivros();
}])