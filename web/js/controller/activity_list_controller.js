function ActivityListController($scope, $navigate) {

    (function init() {

    })();

    $scope.activities =function(){
        return JSON.parse(localStorage.activities);
    }
}