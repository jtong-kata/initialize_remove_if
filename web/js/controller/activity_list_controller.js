function ActivityListController($scope, $navigate) {

    (function init() {

    })();

    $scope.activities =function(){
        if(localStorage.activities == undefined){
            localStorage.activities = JSON.stringify([]);
            return [];
        } else {
            return JSON.parse(localStorage.activities);
        }
    }
}