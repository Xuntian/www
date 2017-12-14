
define([
	'app',
    'helper/mdwiki',
    'helper/util',
], function (app, mdwiki, util) {
    app.registerController("mainController",['$scope', function ($scope) {
		var urlObj = util.parseUrl();
		console.log(urlObj);

		var headerControllerName = "controller/" + "header" + "Controller";
		require([
			headerControllerName,
		], function(htmlContent){
			$scope.headerContent = htmlContent;
			$scope.$apply();
		});

		if (!urlObj.username || urlObj.username == "www") {
			var controllerName = "controller/" + (urlObj.sitename || "editor") + "Controller";
			require([
				controllerName,
			], function(htmlContent){
				$scope.content = htmlContent;
				$scope.$apply();
			});
		}
	}]);
});
