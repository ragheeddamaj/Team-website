var app = angular.module("MainApp",["ngRoute"]);

app.config(["$routeProvider", function($routerProvider){
    
    $routerProvider
    .when("/", {
        templateUrl:"components/home/home.html",
        controller:"HomeController"
    })
    .when("/clints", {
        templateUrl:"components/clints/clints.html",
        controller:"ClintsController"
    })
    .when("/about", {
        templateUrl:"components/about/about.html",
        controller:"AboutUsController"
    })
    .when("/contactus", {
        templateUrl:"components/contatctus/contatctus.html",
        controller:"ContactUsController",
    }).otherwise({
        redirectTo:"/"
    }); 
}])