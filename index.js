const http=require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end("Hello,This is a node js Server");
});

const port=4000;

server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}/`)
});