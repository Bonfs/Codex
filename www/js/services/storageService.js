angular.module('codex')
.factory('storageService', function ($localStorage) {
	$localStorage = $localStorage.$default({
		livros: []
	});

	var _getAllLivros = function ()
	{
		return $localStorage.livros;
	};

	var _addLivro = function (livro)
	{
		$localStorage.livros.push(livro);
	};

	var _removeLivro = function (livro)
	{
		$localStorage.livros.splice($localStorage.livros.indexOf(livro), 1);
	};

	var _deleteLivros = function ()
	{
		$localStorage.livros = [];
	};

	return {
		getAllLivros: _getAllLivros,
		addLivro: _addLivro,
		removeLivro: _removeLivro,
		deleteLivros: _deleteLivros
	};
})