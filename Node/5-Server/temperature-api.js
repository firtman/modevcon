var http = require('http');

module.exports.getTemperature = function(city, callback) {
    var options = {
      host: 'openweathermap.org',
      path: '/data/2.5/weather?q=' + city + '&units=imperial'
    };
    http.get(options, function(response) {
      var data = '';
      response.on('data', function (chunk) {
        data += chunk;
      });
      response.on('end', function () {
         // Response ready
         var responseObject = JSON.parse(data);
         callback(responseObject.main.temp);
      });
    });
    
}