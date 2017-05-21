WeatherForecastApp.
    component('weatherByDateList', {
        templateUrl: 'app/components/weatherByDateList/template.html',

    controller: ['$http', function WeatherByDateListController($http) {
            var self = this;
            var promise =  $http.get('http://openweathermap.org/data/2.5/forecast?q=London,us&appid=b1b15e88fa797225412429c1c50c122a1')
                .then(function(response) {
                    var citiesData = response.data;

                    var mappedData = _.map(citiesData.list,function(cityData) {
                        return {
                            day: new Date((cityData.dt_txt).slice(0,10)).toDateString(),
                            time: (cityData.dt_txt).slice(11),
                            data: cityData
                        }
                    });

                    self.dataToDisplay = _.groupBy(mappedData, function(element) {
                        return element.day;
                    });
                })
        }]
})
