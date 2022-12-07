const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method, req.headers);
  // process.exit()
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node.js Server</title></head>");
  res.write("<body><h1>Hello My Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
