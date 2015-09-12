/**
* Session service
*
* Session service to handle logged in user.
*/

window.angular.module('auth.services.session', [])
.factory('Session', [ 
'activeUser',
'$window',
function( activeUser, $window ) {
    
    if( $window.activeUser ) {
        this.id = $window.activeUser.token;
        this.user = $window.activeUser;
    }

    return this;
}]);
