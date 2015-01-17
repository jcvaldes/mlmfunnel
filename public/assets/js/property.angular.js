var propertyApp = angular.module('propertyApp', []);

propertyApp.controller('PropertyListCtrl', function ($scope, $http) {
    $scope.formData = {};
    $scope.selected = -1;
   
    $http.get('/api/property')
    .success(function(data) {
        $scope.properties = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });

});