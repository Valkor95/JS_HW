const http = require("http");
const PORT = 3000;
const server = http.createServer(function (req, res) {
    console.log("URL of your page:" + req.url);
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("It works fine");
});

server.listen(PORT);
console.log("We are listening port" + PORT);