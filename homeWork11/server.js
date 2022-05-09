//hw11 NODEjs

task-1
const os = require("os");
const path = require("path");
const http = require("http");

//current name
let user = os.userInfo().username;
console.log(user);
//os
let os_type = os.type();
console.log(os_type);
//system work time
let os_time = String(os.uptime());
console.log(os_time);
//current directory
const dir_name = path.dirname(require.main.filename);
console.log(dir_name);
// const dir_name2 = path.basename(__dirname);
// console.log(dir_name2);
//server file name
const file_name = path.basename(__filename);
console.log(file_name);

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write('<h1>System information</h1>')
    res.write(`<p>Current user name: ${user}\n</p>`);
    res.write(`<p>OS type: ${os_type}\n</p>`);
    res.write(`<p>System work time: ${os_time} minutes\n</p>`);
    res.write(`<p>Current work directory: ${dir_name}\n</p>`);
    res.write(`<p>Server file name: ${file_name}\n</p>`);

    res.end("Server working!\n");
  }).listen(5000);

console.log("Server running at http://127.0.0.1:5000/");

