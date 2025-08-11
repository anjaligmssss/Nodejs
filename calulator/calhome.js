
const { sumRequestHandler } = require("./sum");

const requestHandler = (req,res)=>{
    console.log(req.url, req.method);
    if(req.url === "/"){

        res.setHeader("Content-Type","text/html");
        res.write(`
            <html>
            <head>
            <title>Calulator</title>
            </head>
            <body>
            <h1>Welcome to Calulator</h1>
            <a href="/calculator">go to calculator</a>
            </body>
            </html>
            `);
            return res.end();
    }

    else if(req.url === "/calculator"){

        res.setHeader("Content-Type","text/html");
        res.write(`
            <html>
            <head>
            <title>Calulator</title>
            </head>
            <body>
            <h1>You are in the calculator </h1>
            <form action="/sum" &&  method="POST">
            <input type="text" name="first">
            <input type="text" name="second">
            <input type="submit" value="Sum">
             </form>
            </body>
            </html>
            `);
            return res.end();
        }
         else if(req.url === "/sum" && req.method === "POST"){
           return sumRequestHandler(req,res);
         }

    res.setHeader("Content-Type","text/html");
        res.write(`
            <html>
            <head>
            <title>Calulator</title>
            </head>
            <body>
            <h1>404</h1>
            <a href="/">go to home</a>
            </body>
            </html>
            `);
            return res.end();
 };

exports.requestHandler = requestHandler;