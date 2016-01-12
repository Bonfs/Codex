angular.module('codex')

.factory('storageService', ['$localStorage', function ($localStorage){
	$localStorage = $localStorage.$default({
  		livros: []
	});

	var _getLivros = function () {
		return $localStorage.livros;
	}

	var _addLivro = function (livro) {
		$localStorage.livros.push(livro);
	}

	var _removeLivro = function (livro) {
		$localStorage.livros.splice($localStorage.livros.indexOf(livro), 1);
	}

	var _limpaRegistro = function () {
		$localStorage.livros = [];
	}

	return {
		getLivros: _getLivros,
		addLivro: _addLivro,
		removeLivro: _removeLivro,
		limpaRegistro: _limpaRegistro
	};
}])