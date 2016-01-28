//Guarda os livros do acervo
angular.module('codex')

.factory('acervoDB', [function(){
	//Acervo de livros falsos
	var acervo = [
		{id: 1, nome_livro: 'Comunicação através das cores [manuscrito]/2002', codigo: 'M 651.3741 F936 c', local: 'BFEAAC', autor: 'Freitas, Luciana de', ano: 2002, obra: 'Monografias', numLivros: 5, disponivel: true},
		{id: 2, nome_livro: 'Criataruas Mágicas e Onde Habitam', codigo: '520.a5', local: 'BCT', autor: 'J.K. Rowling', ano: 2005, obra: 'livro', numLivros: 2, disponivel: false},
		{id: 3, nome_livro: 'Livro 2', codigo: '443f.20', local: 'BCT', autor: 'BONFIM', ano: 2000, obra: 'livro', numLivros: 3, disponivel: true}
	];

	function _getAcervo()
	{
		return acervo;
	}

	return{
		getAcervo: _getAcervo
	};
}])