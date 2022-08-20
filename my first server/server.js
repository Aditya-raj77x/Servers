const http=require("http");
const port=8081;
http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<h1>THIS IS ADITYA'S FIRST EVEN SERVER</h1> <h1>DAY TWO TRY RUN</h1>");
    response.end();
}).listen(port,()=>{
    console.log(`ADITYA's SERVER STARTED AT PORT ${port}`);
});