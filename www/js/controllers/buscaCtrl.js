angular.module('codex').controller('buscaCtrl', ['$scope', '$ionicHistory', '$ionicFilterBar', '$timeout', function ($scope, $ionicHistory, $ionicFilterBar, $timeout){
	var filterBarInstance;
	$scope.titulo = 'Livros';
	$scope.livros;//Título, Autor, código+localização, Tipo de obra
	function getLivros() {
		var items = [
			{id: 1, nome_livro: 'Comunicação através das cores[manuscrito]/2002', codigo: 'M 651.3741 F936 c', local: 'BFEAAC', autor: 'Freitas, Luciana de', ano: 2002, obra: 'Monografias'},
			{id: 2, nome_livro: 'Livro 2', codigo: '443f.20', local: 'BCT', autor: 'BONFIM', ano: 2000, obra: 'livro'},
			{id: 3, nome_livro: 'Criataruas Mágicas e Onde Habitam', codigo: '520.a5', local: 'BCT', autor: 'J.K. Rowling', ano: 2005, obra: 'livro'}
		];
		$scope.livros = items;
	};
	getLivros();

	$scope.showFilterBar = function () {
	    filterBarInstance = $ionicFilterBar.show({
	        items: $scope.livros,
	        update: function (filteredItems, filterText) {
	          $scope.livros = filteredItems;
	          if (filterText) {
	            //console.log(filterText);
	            //console.log('Busca: '+ $scope.busca);
	            $scope.busca = filterText
	          }
	        },
	      });
	    };	

    $scope.refreshItems = function () {
      if (filterBarInstance) {
        filterBarInstance();
        filterBarInstance = null;
      }

      $timeout(function () {
      	$scope.livros = $scope.livros;
        $scope.$broadcast('scroll.refreshComplete');
      }, 1000);
    };
}])


/**
[
			{id: 1, nome_livro: 'Livro 1', codigo: '333f.8', autor: 'M. Bonfim', ano: 1999},
			{id: 2, nome_livro: 'Livro 2', codigo: '443f.20', autor: 'BONFIM', ano: 2000},
			{id: 3, nome_livro: 'Criataruas Mágicas e Onde Habitam', codigo: '520.a5', autor: 'J.K. Rowling', ano: 2005}
		];
		**/