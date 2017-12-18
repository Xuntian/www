
define([
	'app',
    'helper/mdwiki',
    'helper/util',
	'text!html/aside.html',
], function (app, mdwiki, util, htmlContent) {
    app.registerController("asideController",['$scope', function ($scope) {
		$scope.message = "this is a test";

		$scope.showManagerView = function(){
			window.location.href = "/dashboard/admin";
		}
		$scope.showManagerView = function(){
			window.location.href = "/dashboard/admin";
		}

		$scope.showGivenView = function(viewName){
			window.location.href = "/dashboard/" + viewName;
		}
	}]);

	return htmlContent;
});
