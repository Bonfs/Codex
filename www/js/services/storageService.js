angular.module('codex')

.factory('storageService', ['$localStorage', '$cordovaLocalNotification', function ($localStorage, $cordovaLocalNotification){
	$localStorage = $localStorage.$default({
  		livros: [],
  		id: 0
	});

	var _getLivros = function () {
		return $localStorage.livros;
	}

	var _addLivro = function (livro) {
		//id, title, text, at, icon
		/**livro.id = $localStorage.id +1;
		livro.title = livro.nome_livro;
		livro.text = 'Não esqueça de devolver o seu livro';
		livro.at = **/
		$cordovaLocalNotification.schedule({
            id: $localStorage.id + 1,
            title: livro.nome_livro,
            text: 'Não esqueça de devolver seu livro!',
            icon: 'res://ldpi-icon.png',
            at: livro.data_devolucao
          }).then(function (result) {
            console.log('Livro Cadastrado!');
          });
		livro.id = $localStorage.id + 1;
        $localStorage.id += 1;
        $localStorage.livros.push(livro);
	}

	var _removeLivro = function (livro) {
		var i = $localStorage.livros.indexOf(livro);
		$cordovaLocalNotification.cancel($localStorage.livros[i].id).then(function (){
			console.log('Notificação cancelada!');
		});
		$localStorage.livros.splice($localStorage.livros.indexOf(livro), 1);
	}

	var _limpaRegistro = function () {
		$localStorage.livros = [];
		$localStorage.id = 0;
	}


	return {
		getLivros: _getLivros,
		addLivro: _addLivro,
		removeLivro: _removeLivro,
		limpaRegistro: _limpaRegistro
	};
}])