const http = require("http");
const fs = require("fs");
const _ = require("lodash");


const server = http.createServer((req, resp) => {
    console.log(req.url);
    resp.setHeader('content-type', 'text/html');
    
    let path = "./views/";

    let rand = _.random(0,100);
    console.log(rand);

    switch (req.url){
        case "/":
            path += "index.html";
            resp.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            resp.statusCode = 200;
            break;
        case "/about-me":
            resp.setHeader("Location","/about");
            resp.statusCode = 301;
            break;
        default:
            path += "404.html";
            resp.statusCode = 404;
            break;
    }

    fs.readFile(path, (err,data) => {
        if (err)
        {
            console.log(err);
            resp.end();
        }else{
            resp.write(data);
            resp.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log("Server started listening");
});