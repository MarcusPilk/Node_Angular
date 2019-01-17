let app = angular.module("WeatherApp",[]);
const KELVIN = 273.15;

app.controller("WeatherController",['$scope','$http', '$sce',function ($scope, $http, $sce) {

    $scope.demo = "Weather API";

    $scope.city = "London";
    $scope.country = "uk";

    let weatherAPIUrl = $sce.trustAsResourceUrl('http://localhost:3001/');

    $http.get(weatherAPIUrl).then(resp => {
        let data = resp.data;

        $scope.weather = {
            main: data.weather[0].main,
            description: data.weather[0].description
        };

        $scope.temp = {
            currentTemp: data.main.temp - KELVIN,
            minTemp: data.main.temp_min - KELVIN,
            maxTemp: data.main.temp_max - KELVIN
        };

    });
}]);