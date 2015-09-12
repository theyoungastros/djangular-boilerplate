/**
 * API service
 */
window.angular.module('api.services.api', [])
.factory('API', [
function( ) {

    this.domain = '/';
    this.version = 1.0;
    this.root = this.domain + 'api/';

    /**
     * Return a versioned url
     */
    this.url = function( str ) {
        return this.domain + 'api/' + this.version + '/' + str;
    };

    return this;
}]);