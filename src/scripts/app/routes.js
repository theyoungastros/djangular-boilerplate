/**
 * App router
 */
window.app.config([
'$stateProvider',
'$urlRouterProvider',
function( $stateProvider, $urlRouterProvider ) {

    var baseDir = '/views/';

    $stateProvider

    //main
    .state('main', {
        views: {
            'header': {
                templateUrl: baseDir + 'nav/header.html'
            },
            'nav': {
                templateUrl: baseDir + 'nav/nav.html'
            },
            'content': {
                templateUrl: baseDir + 'main.html'
            }
        },
    })
    
    //Home Page
    .state('main.home', {
        url: '/',
        templateUrl: baseDir + 'home.html',
    })
    
    //About Page
    .state('main.about', {
        url: '/about',
        templateUrl: baseDir + 'about.html',
    })
    
    //Error pages.
    .state('error', {
        url: '/500',
        templateUrl: baseDir + 'errors/500.html'
    })
    .state('error.404', {
        url: '/404',
        templateUrl: baseDir + 'errors/404.html'
    });


    //Redirect routes.
    $urlRouterProvider.when('','/');
    $urlRouterProvider.otherwise('/');

}]);


