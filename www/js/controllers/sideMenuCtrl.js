angular.module('codex').controller('sideMenuCtrl', function ($scope, $ionicSideMenuDelegate, $ionicPlatform) {
	//ionic.Platform.isAndroid()	
	//ionic.Platform.platform()
	//console.log(ionic.Platform.version());
	//console.log($ionicHistory.viewHistory());
	$scope.isAndroid = ionic.Platform.isAndroid();
	$scope.isWeb = ionic.Platform.isWebView();
	$scope.isIOS = ionic.Platform.isIOS();
	$scope.showMenu = showMenu;
	function showMenu ()
	{
		$ionicSideMenuDelegate.toggleLeft();
	}

})