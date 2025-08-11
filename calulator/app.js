const http = require("http");
const { requestHandler } = require("./calhome");
const server = http.createServer(requestHandler);

const PORT =3002;

server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});