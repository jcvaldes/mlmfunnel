var ubicationApp = angular.module('ubicationApp', []);

ubicationApp.controller('CountryListCtrl', function ($scope, $http) {
    $scope.formData = {};
    $scope.selected = -1;
   
    $http.get('/api/country')
    .success(function(data) {
        $scope.countries = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });
    //Create a country
    $scope.createCountry = function() {
        var country = prompt("Ingrese el nombre del pais:");

        $http.post('/api/country', {'name' : country})
        .success(function(data) {
            $scope.countries = data;
            customScroll();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
    // delete a country
    $scope.deleteCountry = function(id) {
        $("#estates").addClass('hide');
        $("#cities").addClass('hide');

        $http.delete('/api/country/' + id)
        .success(function(data) {
            $scope.countries = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    // delete a country
    $scope.showEstates = function(id) {
        $scope.selected = id; 
        $scope.$root.$broadcast("select", {});

        $("#estates").removeClass('hide');
        $("#cities").addClass('hide');

        $scope.$root.$broadcast("estates", {
            id: id
        });
    };

});


ubicationApp.controller('EstateListCtrl', function ($scope, $http) {
    $scope.formData = {};
    $scope.country;

    $scope.selected = -1;

    $scope.$on("select", function (event, args) {
        $scope.selected = -1;
    });

    $scope.$on("estates", function (event, args) {
        $scope.country = args.id;
        $http.get('/api/country/' + $scope.country)
        .success(function(data) {
            $scope.estates = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    });

    
    //Create a country
    $scope.createEstate = function() {
        var estate = prompt("Ingrese el nombre de la provincia:");

        $http.post('/api/estate', {'name' : estate, 'country_id' : $scope.country})
        .success(function(data) {
            $scope.estates = data;
            customScroll();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
    // delete a country
    $scope.deleteEstate = function(id) {
        $("#cities").addClass('hide');
        $http.delete('/api/estate/' + id)
        .success(function(data) {
            $scope.estates = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    // delete a country
    $scope.showCities = function(id) {
        $scope.selected = id; 
        $("#cities").removeClass('hide');

        $scope.$root.$broadcast("cities", {
            id: id
        });
    };

});

ubicationApp.controller('CityListCtrl', function ($scope, $http) {
    $scope.formData = {};
    $scope.estate;

    $scope.$on("cities", function (event, args) {
        $scope.estate = args.id;
        $http.get('/api/estate/' + $scope.estate)
        .success(function(data) {
            $scope.cities = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    });

    
    //Create a country
    $scope.createCity = function() {
        var city = prompt("Ingrese el nombre de la ciudad:");

        $http.post('/api/city', {'name' : city, 'estate_id' : $scope.estate})
        .success(function(data) {
            $scope.cities = data;
            customScroll();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
    // delete a country
    $scope.deleteCity = function(id) {
        $http.delete('/api/city/' + id)
        .success(function(data) {
            $scope.cities = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };    

});