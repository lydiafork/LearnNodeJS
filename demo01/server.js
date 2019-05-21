var http = require("http");
var path = require("path");

function start(route) {
  function req(request, response) {
    if (request.url === '/') {
      request.url  = '/index.html';
    }
    var pathname = path.join('web', path.normalize(request.url));
    var postData = "";
    route(pathname, response, postData)
  }
  http.createServer(req).listen(80);
  http.createServer(req).listen(443);
}
exports.start = start;

