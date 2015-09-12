/**
 * Application configuration.
 */

//Add Auth Interceptor to HTTP interceptors.
window.app.config(['$httpProvider', '$resourceProvider',
function( $httpProvider, $resourceProvider ) {

    $resourceProvider.defaults.stripTrailingSlashes = false;

}]);

//Configure the 3rd party loading bar.
window.app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 200;
}]);

//Removing tomcat unsupported headers
window.app.config(['$httpProvider',
function( $httpProvider, Configuration ) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    angular.noop();
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
function( $locationProvider ) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);