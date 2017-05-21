
var WeatherForecastApp = angular.module('WeatherForecastApp', ['ngMaterial']);

WeatherForecastApp.factory('_', ['$window',
    function($window) {
        return $window._;
    }
]);


WeatherForecastApp.controller('MainController', function($scope, _) {

});

WeatherForecastApp
    .config(function($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal', {
                'default': '600',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
            })

            .accentPalette('pink', {
                'default': '200'
            });

    });

