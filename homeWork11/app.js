const http = require("http");
const { user_data, time, username} = require('./personalmodule');

const PORT = 8000;

function onRequest(req, res) {
    res.writeHead(200, {"Content-Type": "text/html" });

    res.write(`Date of request: ${time}`);
    res.write(`<p>${user_data(username)}</p>`);

    res.end();    
};

http.createServer(onRequest).listen(PORT);


console.log("Server running at http://127.0.0.1:8000/");