const http = require("http");
const port = 8081;
const doList = ["gaming", "chating", "music"];
http
  .createServer((request, response) => {
    const { method, url } = request;
    if(url==="/doList"){
        if(method==="GET"){
            response.writeHead(200, {"Content-Type": "text/html"} );
            response.write(doList.toString());
            
        }else if(method==="POST"){
            let body="";
            request.on('error',(err)=>{
                console.error(err);
            }).on('data',(ck)=>{
                body+=ck;
            }).on('end',()=>{
                body=JSON.parse(body);
                console.log("DATA :",body);
            })
        }

        else{
            response.writeHead(502);
            
        }
    }else{
        response.writeHead(404);
    }
    response.end()
  })
  .listen(port, () => {
    console.log(`ADITYA's SERVER STARTED AT PORT ${port}`);
  });
