/**
 * Bundling module dependencies and creating module constants.
 *
 * Taken from https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
 */
window.angular.module('auth', [
    'auth.services.auth',
    'auth.services.session',
])
.config([
'$provide',
function( $provide) {

    if(window.activeUser){
        var activeUser = angular.copy(window.activeUser);
        $provide.constant('activeUser', activeUser);
    }
    
}]);