//Guarda os livros do acervo
angular.module('codex')

.factory('acervoDB', [function(){
	//Acervo de livros falsos
	var acervo = [
		{id: 1, nome_livro: 'Comunicação através das cores [manuscrito]/2002', codigo: 'M 651.3741 F936c', local: 'BFEAAC', autor: 'Freitas, Luciana de', ano: 2002, obra: 'Monografias', numLivros: 5, disponivel: 'Disponível', capa: 'img/capas/monografia.jpg'},
		{id: 2, nome_livro: 'Design de interação : Além da Interação Homem-Computador', codigo: '004.019 P923d', local: 'BCT, BCM', autor: 'Preece, Jennifer', ano: 2005, obra: 'livro', numLivros: 10, disponivel: 'Indisponível', capa: 'img/capas/di.png'},
		{id: 3, nome_livro: 'Interação Humano-Computador', codigo: '004.019  B212i', local: 'BCT, BCA', autor: 'Barbosa, Simone D. J.', ano: 2010, obra: 'livro', numLivros: 7, disponivel: 'Disponível', capa: 'img/capas/ihc.jpg'},
		{id: 4, nome_livro: 'Aprendendo JavaScript', codigo: '005.133 P895a', local: 'BCM', autor: 'Powers, Shelley', ano: 2010, obra: 'livro', numLivros: 3, disponivel: 'Disponível', capa: 'img/capas/aprendendo-javascript.jpg'},
		{id: 5, nome_livro: 'HTML 5 :a linguagem de marcação que revolucionou a web', codigo: '005.133 S581h', local: 'BCT', autor: 'Silva, Maurício Samy', ano: 2011, obra: 'livro', numLivros: 4, disponivel: 'Disponível', capa: 'img/capas/html.jpg'},
		{id: 6, nome_livro: 'HTML 5 :a linguagem de marcação que revolucionou a web', codigo: '005.133 S581h', local: 'BCT', autor: 'Silva, Maurício Samy', ano: 2011, obra: 'livro', numLivros: 4, disponivel: 'Disponível', capa: 'img/capas/html.jpg'}
	];

	function _getAcervo()
	{
		return acervo;
	}

	return{
		getAcervo: _getAcervo
	};
}])