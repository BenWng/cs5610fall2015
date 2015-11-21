(function(){
  angular
    .module("BlogApp")
    .config(Configuration)


    function Configuration($routeProvider,$sceProvider)
    {
      $routeProvider
        .when('/home',{
          templateUrl: './view/Home/Home.view.html'
        })
        .when('/upload',{
          templateUrl: './view/Upload/Upload.view.html'
        })
        .when('/contact',{
          templateUrl: './view/Contact/Contact.view.html'
        })
        .when('/individual/:id',{
          templateUrl: './view/Individual/Individual.view.html'
        })
        .otherwise({
            redirectTo:'/home'
        });

      $sceProvider.enabled(false);


    }
})();
