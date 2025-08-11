// const http = require("http");
// const Server = http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.header);
//     res.setHeader("Content-Type","text/html");
//     res.write("<html>");
//       res.write("<head><title>FirstServer</title></head>");
//        res.write("<body><h1>First Server</h1></body>");
//       res.write("</html>");
//       res.end();
// })

// const port = 3000;
// Server.listen(port,()=>{
//     console.log(`Server running at http://localhost:${port}`);
// });


// const http = require("http");
// const Server = http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.header);
//     if(req.url === "/")
//    { res.setHeader("Content-Type","text/html");
//     res.write("<html>");
//       res.write("<head><title>FirstServer</title></head>");
//        res.write("<body><h1>First Server</h1></body>");
//       res.write("</html>");
//       return res.end();
//     }

//     else if(req.url === "/products")  {
//         res.setHeader("Content-Type","text/html");
//     res.write("<html>");
//       res.write("<head><title>FirstServer</title></head>");
//        res.write("<body><h1>Check oue products</h1></body>");
//       res.write("</html>");
//       return res.end();
//     }
// })

// const port = 3000;
// Server.listen(port,()=>{
//     console.log(`Server running at http://localhost:${port}`);
// });

const http = require("http");
const fs = require("fs");
// const { URLSearchParams } = require("url");
// const { BodyMixin } = require("undici-types");

const Server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
      
      if(req.url === "/") {
       res.setHeader("Content-Type","text/html");
       res.write("<html>");
       res.write("<head><title>user Data</title></head>");
       res.write("<body><h1>Enter your name :</h1>");

       res.write("<form action = '/submit-details' method = 'POST'>");
       res.write("<input type='text'  name ='name' placeholder='enter Name'");
       res.write("<label for='male'>male</label>");
       res.write("<input type='radio' id='male'  name ='gender' value='male'>");
       res.write("<label for='female'>female</label>");
       res.write("<input type='radio' id='female' name ='gender' value='female'>");
       res.write("<input type='submit' value = 'submit'>");
       res.write("</form>");

       res.write("</body>");
       res.write("</html>");
       return res.end();
    }

       else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
            const body = [];
            req.on('data',(chunk)=>{
                console.log(chunk);
                body.push(chunk);
            }); 
            req.on('end',()=>{
                const fullBody= Buffer.concat(body).toString();
                console.log(fullBody);
                
                const params = new URLSearchParams(fullBody);
                const BodyObject = {};
                for(const[key , val ] of params.entries()){
                    BodyObject[key] = val;
                };
                console.log(BodyObject);
                fs.writeFileSync("user.txt",JSON.stringify(BodyObject));
                });


            
            res.statusCode = 302;
            res.setHeader("Location","/");  
            return res.end();
            
       }
         res.setHeader("Content-Type","text/html");
         res.write("<html>");
         res.write("<head><title>FirstServer</title></head>");
         res.write("<body><h1>First Server</h1></body>");
         res.write("</html>");
         res.end();
});

const port = 3000;
Server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});
