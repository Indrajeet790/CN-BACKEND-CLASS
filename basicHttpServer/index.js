const http = require("http");
const port = 8000;

// require fs module for reading and writing
const fs = require("fs");

// create a requestHandler
function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });

  // read the file
  fs.readFile("./basicHttpServer/index.html", function (err, data) {
    if (err) {
      console.log("error", err);
      return res.end(`<h1>Error</h1>`);
    }
    return res.end(data);
  });
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on port 8000");
  }
});
