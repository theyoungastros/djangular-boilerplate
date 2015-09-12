/**
 * Navigation controller.
 *
 * This controller will build out the navigation items
 *
 */
window.angular.module('nav.controllers.nav', [])
.controller('NavCtrl', [
'$scope',
'$state',
function( $scope, $state ) {

    //Pass state service to the scope.
    $scope.$state = $state;

    //Menu items.
    $scope.menuItems = [];

    buildMenu();

    /**
     * Build the menu items.
     */
    function buildMenu() {

        var home = {
            state: 'main.home',
            title: 'Home',
            active_state: 'main.home',
            icon: 'fa-house'
        };
        var about = {
            state: 'main.about',
            title: 'About',
            active_state: 'dashboard.releases',
            icon: 'fa-star'
        };
       
        $scope.menuItems.push(home);
        $scope.menuItems.push(about);
       
    }

}]);
