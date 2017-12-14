
define([
	'app',
    'helper/util',
	'text!html/login.html',
], function (app, util, htmlContent) {
    app.registerController("loginController",['$scope', function ($scope) {
		$scope.errMsg = "Warning, there is an error!";
		$scope.login = function(){
			//alert("asds");
		}
	}]);

	return htmlContent;
});
