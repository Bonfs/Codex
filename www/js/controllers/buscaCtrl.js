angular.module('codex').controller('buscaCtrl', ['$scope', '$ionicHistory', '$ionicFilterBar', '$timeout', '$stateParams', '$state', 'acervoDB', 'filterFilter',
	function ($scope, $ionicHistory, $ionicFilterBar, $timeout, $stateParams, $state , acervoDB, filterFilter){
	var filterBarInstance;
	$scope.titulo = 'Livros';
	$scope.livros = acervoDB.getAcervo();//Título, Autor, código+localização, Tipo de obra
	$scope.busca;

	// if($scope.busca != undefined && $scope.busca.length >= 3 && $scope.livros.length == 0)
	// 	$scope.erroBusca = true;
	// else
	// 	$scope.erroBusca = false;
	$scope.showFilterBar = function () {
	    filterBarInstance = $ionicFilterBar.show({
	        items: $scope.livros,
	        update: function (filteredItems, filterText) {
	          $scope.livros = filteredItems;
						// console.log(filteredItems);
	          if (filterText) {
	            //console.log(filterText);
	            //console.log('Busca: '+ $scope.busca);
	            $scope.busca = filterText
	          }
						// console.log(filterFilter(filteredItems, $scope.busca).length);
						if($scope.busca != undefined && $scope.busca.length >= 3 && filterFilter(filteredItems, $scope.busca).length == 0)
							$scope.erroBusca = true;
						else
							$scope.erroBusca = false;
	        },
	        cancel: function(){
	        	//console.log('cancel')
	        	$stateParams.barPesquisaAtivada = false;
	        }
	      });
	    };

    $scope.refreshItems = function () {
      if (filterBarInstance) {
        filterBarInstance();
        filterBarInstance = null;
      }

      $timeout(function () {
      	$scope.livros = acervoDB.getAcervo();
        $scope.$broadcast('scroll.refreshComplete');
      }, 1000);
    };

    $scope.goBack = function () {
    	$ionicHistory.goBack();
    	delete $scope.livro;
    }

    $scope.$on('$ionicView.beforeLeave', function () {
    	//console.log($state.current.name);
    	$scope.busca = '';
  	});

    function isEmpty(obj) {

	    // null and undefined are "empty"
	    if (obj == null) return true;

	    // Assume if it has a length property with a non-zero value
	    // that that property is correct.
	    if (obj.length > 0)    return false;
	    if (obj.length === 0)  return true;

	    // Otherwise, does it have any properties of its own?
	    // Note that this doesn't handle
	    // toString and valueOf enumeration bugs in IE < 9
	    for (var key in obj) {
	        if (hasOwnProperty.call(obj, key)) return false;
	    }

	    return true;
	}

	//Determina a informação do livro escolhido na view 'buscaLivroInfo.html'
	if(!isEmpty($stateParams))
		$scope.livroInfo = $scope.livros[$stateParams.livro - 1];
	//Ativa a barra de pesquisa quando clica a 'lupa' na home
	if($stateParams.barPesquisaAtivada == 'true')
		$scope.showFilterBar();
}])
