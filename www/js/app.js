// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//console.log('teste;')
angular.module('codex', ['ionic', 'ngStorage', 'ngCordova', 'jett.ionic.filter.bar'])

.run(function($ionicPlatform, $state, $ionicPopup, $ionicHistory, $ionicSideMenuDelegate, $cordovaStatusbar) {
  //$cordovaStatusbar.styleHex('#002946');
  //console.log(ionic.Platform.isAndroid())
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      if(ionic.Platform.isAndroid()){
        window.StatusBar.overlaysWebView(false);
        window.StatusBar.backgroundColorByHexString("#003C66");
      }
      else{
        StatusBar.styleDefault();  
      }
      
    }
  });
  $ionicPlatform.registerBackButtonAction ( function (){
    //alert('you sure you want to exit?');
    if($state.current.name == 'app.home')
    {
      $ionicPopup.confirm({
        title: 'Deseja sair?',
        template: 'Você tem certeza que deseja sair do Codex?',
        okText: 'Sim!',
        cancelText: 'Cancelar'
      })
      .then(function (res){
        if (res)
        {
          //alert('true');
          navigator.app.exitApp();
        }
      })
    }
	else if($state.current.name == 'app.Bibliotecas' || $state.current.name == 'app.codificacao' || $state.current.name == 'app.livrosAlugados' || $state.current.name == 'app.busca')
	{
		$state.go('app.home');
	}
    else
    {
      //alert($ionicHistory.currentStateName());
      //$state.go('app.home');
	  $ionicHistory.goBack();
    }
  },100);
  
  if($state.current.name == 'app.addLivro')
  {
    $ionicSideMenuDelegate.canDragContent(false);
  }
  else
  {
    $ionicSideMenuDelegate.canDragContent(true);
  }
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $ionicFilterBarConfigProvider){
  $ionicFilterBarConfigProvider.placeholder('Pesquisar');
  $ionicConfigProvider.views.maxCache(1);
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'view/sideMenu.html',
    controller: 'sideMenuCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'view/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('app.busca', {
    url: '/busca/:barPesquisaAtivada',
    views: {
      'menuContent': {
        templateUrl: 'view/busca.html',
        controller: 'buscaCtrl'
      }
    }
  })

  .state('livroInfo', {
    url: '/livroInfo/:livro',
    templateUrl: 'view/buscaInfoLivro.html',
    conroller: 'buscaCtrl'
  })

  .state('app.livrosAlugados', {
    url: '/livrosAlugados',
    views: {
      'menuContent': {
        templateUrl: 'view/livrosAlugados.html',
        controller: 'livrosAlugadosCtrl'
      }
    }
  })

  .state('app.addLivrosAlugados', {
    url: '/addLivrosAlugados',
    views: {
      'menuContent': {
        templateUrl: 'view/addLivrosAlugados.html',
        controller: 'livrosAlugadosCtrl'
      }
    }
  })

  .state('app.codificacao', {
    url: '/codificacao',
    views: {
      'menuContent': {
        templateUrl: 'view/codificacao.html'
      }
    }
  })
      .state('app.Bibliotecas', {
    url: '/Bibliotecas',
    views: {
      'menuContent': {
        templateUrl: 'view/bibliotecas.html',
        controller: 'biblioCtrl'
      }
    }
  })

 .state('app.Biblioteca', {
    url: '/Biblioteca',
    views: {
      'menuContent': {
        templateUrl: 'view/biblioteca_exibicao.html',
        controller: 'biblio_Exibi_Ctrl'
      }
    }
  })
  
  .state('app.Biblioteca_GPS', {
    url: '/Biblioteca_GPS',
    views: {
      'menuContent': {
        templateUrl: 'view/biblioteca_GPS.html',
        controller: 'biblio_GPS_Ctrl'
      }
    }
  })

  .state('app.sobre', {
    url: '/sobre',
    views: {
      'menuContent': {
        templateUrl: 'view/sobre.html',
        controller: 'sobreCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/app/home');
});
