let app = angular.module("WeatherApp",[]);
const KELVIN = 273.15;

app.controller("WeatherController",['$scope','$http', '$sce',function ($scope, $http, $sce) {

    $scope.demo = "ChromeOS - Marcus Pilkington";

    // $scope.city = "London";
    // $scope.country = "uk";
    //
    // let weatherAPIUrl = $sce.trustAsResourceUrl('http://localhost:3001/');
    //
    // $http.get(weatherAPIUrl).then(resp => {
    //     let data = resp.data;
    //
    //     $scope.weather = {
    //         main: data.weather[0].main,
    //         description: data.weather[0].description
    //     };
    //
    //     $scope.temp = {
    //         currentTemp: data.main.temp - KELVIN,
    //         minTemp: data.main.temp_min - KELVIN,
    //         maxTemp: data.main.temp_max - KELVIN
    //     };
    // });



    $scope.closeB = function(){
        window.close();
        $http.get('http://localhost:3001/close').then((resp) => {console.log('done')});
    }

    $scope.openClock = function(){
        $http.get('http://localhost:3001/clock').then((resp) => {console.log('done')});
    }





}]);