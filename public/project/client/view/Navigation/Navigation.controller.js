(function(){
	  angular
		.module("BlogApp")
		.controller("navigationController", navigationController);
})();


function navigationController($http,$rootScope,$scope,$location){

	$rootScope.currentUser=   {"id": 123, "Name": "Alice", "account":"alice@gmail.com" ,    "activation": "alice"};


			$scope.currentUser=$rootScope.currentUser;
		$scope.currentPost=$rootScope.currentPost;
		$scope.searching=function(){
			$location.path("/home").search('searchText',$scope.searchText);
		}
		$scope.logout=function(){
			$scope.currentUser='undefined';
			$rootScope.currentUser='undefined';
		}
}
