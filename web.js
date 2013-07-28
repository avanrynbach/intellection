var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var msg = fs.readFileSync('./index.html');
    var string = msg.toString('utf-8');
    response.send(string);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
