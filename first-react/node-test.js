var http = require("http");
var num = 0;
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var url = request.url;
//  console.log(url);
    if(url === "/"){
       num++;
    }
    response.end("第"+num+"次");
}).listen(9000);

console.log('Server running at http://127.0.0.1:9000')