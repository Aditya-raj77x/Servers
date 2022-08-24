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
                const newLIST=doList;
                newLIST.push(body.item);
                console.log(newLIST);
                response.writeHead(201);
            });
        }else if(method==="DELETE"){
               let body="";
               request.on('error',(err)=>{
                   console.error(err);
               }).on('data',(ch)=>{
                    body+=ch;
               }).on('end',()=>{
                    body=JSON.parse(body);
                    let delLIST=body.item;
                    for(let i=0 ; i < doList.length;i++){
                        if(doList[i]==delLIST){
                            doList.splice(i,1);
                            break;
                        }
                    }
                    response.writeHead(200,{"Content-Type":"text/html"});
                    response.write("<h2>ELEMENT DELETED SUCCESSFULLY</h2>");
                    console.log(doList);

               })
        }
        

        else{
            response.writeHead(502);
            
        }
    }else{
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>You are not in doList route</h1>");
    }
    response.end()
  })
  .listen(port, () => {
    console.log(`ADITYA's SERVER STARTED AT PORT ${port}`);
  });
