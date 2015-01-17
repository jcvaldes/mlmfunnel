var assignManagerApp = angular.module('assignManagerApp', []);

assignManagerApp.controller('ManagerZoneListCtrl', function ($scope, $http) {
    $scope.formData = {};
   
    $http.get('/api/user/ManagerZone')
    .success(function(data) {
        $scope.managers = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });

    $scope.assign = function(id, manager) {
        $("#modal").modal('hide');
        $(".font-animation").removeClass('hide');
        $http.post('/customer/assign', {'id' : id, 'manager' : manager})
        .success(function(data) {
            $(".font-animation").addClass('hide');
            $("#assign").text('Asignado').removeClass('btn-primary').addClass('btn-success').prop('id', 'assigned');
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

});


assignManagerApp.controller('AgentListCtrl', function ($scope, $http) {
    $scope.formData = {};
   
    $http.get('/api/user-current/Agent')
    .success(function(data) {
        $scope.agents = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });

    $scope.nogotiate = function(id, manager) {
        $("#modal").modal('hide');
        
        $(".font-animation").removeClass('hide');
        $http.post('/customer/negotiate/now', {'id' : id, 'manager' : manager})
        .success(function(data) {
            $(".font-animation").addClass('hide');
            $("#assigned").text('En negociación').removeClass('btn-success').addClass('btn-info').prop('id', 'assigned');
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

});
