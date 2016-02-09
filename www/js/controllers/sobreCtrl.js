angular.module('codex').controller('sobreCtrl', ['$scope', '$cordovaInAppBrowser', function ($scope, $cordovaInAppBrowser){
	//console.log('sobre');
	var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

    $scope.openMaybe = function(){
    	$cordovaInAppBrowser.open('https://equipemaybe.wordpress.com/', '_system', options)
	      .then(function(event) {
	        // success
	      })
	      .catch(function(event) {
	        // error
	      });
	    }
}])