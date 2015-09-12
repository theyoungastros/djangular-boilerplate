/**
* Auth service
*
*  Auth service for authenticating and authorizing users.
*/

window.angular.module('auth.services.auth', [])
.factory('AuthService', [
'$http',
'$cookies',
'$cookieStore',
'Session',
'API',
function( $http, $cookies, $cookieStore, Session, API ) {

    var authService = {};

    /**
     * Set $http Authorization header for each request when authenticated.
     */
    authService.init = function( ) {
        var authToken = Session.id;

        if ( authToken ) {
            authToken = authToken.replace(/"/g, '');

            $http.defaults.headers.common.Authorization = 'Token ' + authToken;
        }
    };


    /**
     * Transform post data to be OAuth2 format
     */
    authService.transform = function(data) {

        var query = '', name, value;
        if ( data instanceof Object ) {

            for ( var key in data ) {

                name = key;
                value = data[key];

                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';

            }
            return query;
        } else {
            return data;
        }

    };


    /**
     * Check if the current user is authenticated
     *
     * @returns Bool
     */
    authService.isAuthenticated = function() {
        return !!Session.user;
    };


    /**
     * Check if the current user is authorized based on their user role.
     *
     * @returns bool
     */
    authService.isAuthorized = function( authorizedRoles ) {
        if ( !angular.isArray(authorizedRoles) ) {
            authorizedRoles = [authorizedRoles];
        }

        return ( authService.isAuthenticated() && authorizedRoles.indexOf(Session.user.profile.role) !== -1 );
    };


    /**
     * Check if the current user has the right permission.
     *
     * @returns bool
     */
    authService.isPermitted = function( permissions ) {
        return Session.hasPermission(permissions);
    };


    return authService;

}]);
