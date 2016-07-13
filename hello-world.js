var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Coffee time? No, not quite yet. But soon...");
  response.end();
}).listen(17959);
