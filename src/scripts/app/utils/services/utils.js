/**
 * Utils service to handle generic methods and helpers.
 */
window.angular.module('utils.services.utils', [])
.factory('Utils', [
function() {

    var utils = {};

    /**
     * Retrieve query string as JSON.
     */
    utils.getJsonFromUrl = function() {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
            var item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    };


    /**
     * Get file extension from a string
     *
     * @param   String  filename
     * @returns String  ext
     */
    utils.getExtension = function( str ) {

        var FILE_EXT_REGEX = /(?:\.([^.]+))?$/;

        return FILE_EXT_REGEX.exec(str)[1].toLowerCase();
    };


    /**
     * Get a file type.
     *
     * Result: [audio, video, image, file]
     *
     */
    utils.getFileType = function( str ) {
        var ext = this.getExtension(str);

        switch( ext ) {
            case 'mp3':
            case 'm4a':
            case 'wav':
            case 'ogg':
                return 'audio';
            case 'mp4':
            case 'mov':
                return 'video';
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'tiff':
            case 'gif':
                return 'image';
            default:
                return 'file';
        }
    };

    utils.rgb2hex = function(red, green, blue) {
      var rgb = blue | (green << 8) | (red << 16);
      return '#' + (0x1000000 + rgb).toString(16).slice(1);
    };

    utils.hexToRgb = function(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
      ] : null;
    };

    utils.detectLuminance = function(r, g, b){
        return Math.sqrt(Math.pow(0.241*r, 2) + Math.pow(0.691*g, 2) + Math.pow(0.068*b, 2));
    };

    utils.getBase64Image = function( img ) {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };

    return utils;
}]);
