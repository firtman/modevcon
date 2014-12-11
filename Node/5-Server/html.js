var http = require('http');

var server = http.createServer(function(req, res) {
    res.write("test");
    res.end();
});

server.listen(3000);