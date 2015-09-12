/**
 * Capitalize filter
 *
 * eg: {{ name | capitalize }} //Capitalize first word
 *     {{ name | capitalize:true }} //All words
 */
window.angular.module('utils.filters.capitalize', [])
.filter('capitalize', [
function( ) {
    return function( input, allWords ) {
        var result = input;
        
        if ( input ) {
            if ( allWords === true ) {
                result = input.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
            } else {
                result = input.charAt(0).toUpperCase() + input.slice(1);
            }
        }

        return result;
    };
}]);