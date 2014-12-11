var http = require('http');
var api = require('./temperature-api');

var server = http.createServer(function(req, res) {
    
});

server.listen(3000);

var Converter = {
    toC: function(f) {
        return (f-32)*5/9;
    },
    toK: function(f) {
        return (f + 459.67) * 5/9;
    }
}