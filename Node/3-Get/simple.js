var options = {
  host: 'websitetips.com',
  path: '/articles/copy/lorem/ipsum.txt'
};

// TODO: create http object

http.get(options, function(response) {
  response.on('data', function (chunk) {

  });
  response.on('end', function () {

  });
});