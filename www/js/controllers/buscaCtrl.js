angular.module('codex').controller('buscaCtrl', ['$scope', '$ionicHistory', '$ionicFilterBar', '$timeout', '$stateParams', '$state', 'acervoDB',
	function ($scope, $ionicHistory, $ionicFilterBar, $timeout, $stateParams, $state , acervoDB){
	var filterBarInstance;
	$scope.titulo = 'Livros';
	$scope.livros = acervoDB.getAcervo();//Título, Autor, código+localização, Tipo de obra
	$scope.busca = '';
	console.log($stateParams.barPesquisaAtivada);

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
	        cancel: function(){
	        	//console.log('cancel');
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
    	//console.log('teste');
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
		$scope.livro = $scope.livros[$stateParams.livro - 1];
	//Ativa a barra de pesquisa quando clica a 'lupa' na home
	if($stateParams.barPesquisaAtivada == 'true')
		$scope.showFilterBar();
}])