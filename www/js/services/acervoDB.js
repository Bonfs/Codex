//Guarda os livros do acervo
angular.module('codex')

.factory('acervoDB', [function(){
	//Acervo de livros falsos
	var acervo = [
		{id: 1, nome_livro: 'Comunicação através das cores [manuscrito]/2002', codigo: 'M 651.3741 F936c', local: 'BFEAAC', autor: 'Freitas, Luciana de', ano: 2002, obra: 'Monografias', numLivros: 5, disponivel: 'Disponível', capa: 'img/capas/monografia.jpg'},
		{id: 2, nome_livro: 'Design de interação : Além da Interação Homem-Computador', codigo: '004.019 P923d', local: 'BCT, BCM', autor: 'Preece, Jennifer', ano: 2005, obra: 'livro', numLivros: 10, disponivel: 'Indisponível', capa: 'img/capas/di.png'},
		{id: 3, nome_livro: 'Interação Humano-Computador', codigo: '004.019  B212i', local: 'BCT, BCA', autor: 'Barbosa, Simone D. J.', ano: 2010, obra: 'livro', numLivros: 7, disponivel: 'Disponível', capa: 'img/capas/ihc.jpg'},
		{id: 4, nome_livro: 'Aprendendo JavaScript', codigo: '005.133 P895a', local: 'BCM', autor: 'Powers, Shelley', ano: 2010, obra: 'livro', numLivros: 3, disponivel: 'Disponível', capa: 'img/capas/aprendendo-javascript.jpg'},
		{id: 5, nome_livro: 'HTML 5:a linguagem de marcação que revolucionou a web', codigo: '005.133 S581h', local: 'BCT', autor: 'Silva, Maurício Samy', ano: 2011, obra: 'livro', numLivros: 4, disponivel: 'Disponível', capa: 'img/capas/html.jpg'},
		{id: 6, nome_livro: 'JQuery: a biblioteca do programador JavaScript', codigo: '005.133 S586j 2.ed', local: 'BCT', autor: 'Silva, Maurício Samy', ano: 2010, obra: 'livro', numLivros: 4, disponivel: 'Indisponível', capa: 'img/capas/jquery.png'},
		{id: 7, nome_livro: 'Animais Fantásticos e Onde Habitam', codigo: '700.R758a 1.ed', local: 'BCT', autor: 'Rowling, J.K', ano: 2001, obra: 'livro', numLivros: 1, disponivel: 'Disponível', capa: 'img/capas/hp.jpg'},
		{id: 8, nome_livro: 'Cibercultura, tecnologia e vida social na cultura contemporânea', codigo: '302.23L576c 3.ed', local: 'BCH', autor: 'Lemos, André', ano: 2007, obra: 'livro', numLivros: 1, disponivel: 'Indisponível', capa: 'img/capas/cibercultura.png'},
		{id: 9, nome_livro: 'O ciclo do contato: temas básicos na abordagem gestáltica ', codigo: '150.1982R367c 4.ed', local: 'BCH', autor: 'Ribeiro, Jorge Ponciano', ano: 2007, obra: 'livro', numLivros: 2, disponivel: 'Indisponível', capa: 'img/capas/ciclo.jpg'},
		{id: 10, nome_livro: 'Use a cabeça!: HTML com CCS e XHTML', codigo: '005.75F93u 2.ed', local: 'BCT', autor: 'Freeman, Elisabeth', ano: 2008, obra: 'livro', numLivros: 5, disponivel: 'Disponível', capa: 'img/capas/htmlcss.png'}
	];

	function _getAcervo()
	{
		return acervo;
	}

	return{
		getAcervo: _getAcervo
	};
}])