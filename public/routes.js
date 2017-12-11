// ROUTES
personalSite.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })

});
