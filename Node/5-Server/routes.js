var http = require('http');
var api = require('./temperature-api');
var url = require('url');

var server = http.createServer(function(req, res) {
    var query = url.parse(req.url).query;
    api.getTemperature(query, function(t) {
        // Write JSON file
        res.writeHead(200, 
                      { "Content-Type": "application/json" });
        var object = {
            f: t,
            c: Converter.toC(t),
            k: Converter.toK(t)
        }
        res.write(JSON.stringify(object));   
        res.end();
    });    
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