// Sidebar controller

(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);
})();

//////////////////////////////////////////////////////////
function SidebarController($scope, $location){
    $scope.ActiveOrNot = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return true;
        } else {
            return false;
        }
    }
}

