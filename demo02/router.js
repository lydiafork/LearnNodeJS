var fs = require("fs");
var responseNotFound = (response) => {
  response.writeHead(404, {
    'Content-Type': 'text/html'
  });
  response.end(`<h1>Not Found</h1><p>The requested URL ${response.url} was not found on this server.</p>`);
};
var route = (pathname, response, data) => {
  fs.stat(pathname, (err, stat) => {
    if (err) {
      responseNotFound(response);
    } else {
      const readStream = fs.createReadStream(pathname);
      readStream.pipe(response);
    }
  });
};
exports.route = route;
