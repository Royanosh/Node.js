const fs = require("fs");
const requestHandler = (req, res) => {
  // console.log(req);
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter the Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message' ><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  // process.exit()
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node.js Server</title></head>");
  res.write("<body><h1>Hello My Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
// Ways to export
// module.exports.handler = requestHandler;
// module.exports.someText = "Some Text";

// module.exports = {
//   handler:requestHandler,
//   someText:"Some Text"
// }

// exports.handler = requestHandler;
