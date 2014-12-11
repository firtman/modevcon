var http = require('http');

var options = {
  host: 'openweathermap.org',
  path: '/data/2.5/weather?q=Washington&units=imperial'
};

http.get(options, function(response) {
  response.on('data', function (chunk) {

  });
  response.on('end', function () {

  });
});




// hint: process.argv for reading arguments
