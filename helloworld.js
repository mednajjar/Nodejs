var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plailn'});
    res.end('Hello World');
}).listen(9001);

console.log('server is running on a port=9001');
