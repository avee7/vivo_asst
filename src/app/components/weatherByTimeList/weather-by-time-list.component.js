WeatherForecastApp.component('weatherByTimeList', {
    templateUrl: 'app/components/weatherByTimeList/template.html',
    require: {
        parent: '^weatherByDateList'
    },

    controller: function WeatherByTimeListController() {
        this.getTempInCelsius = function(value) {
            return (value).toFixed(2);
        }
    },

    bindings: {
        weatherData: '<'
    }
})
