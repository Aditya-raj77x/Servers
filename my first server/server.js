const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
//inisization
const app=express();
app.use(express.json());//application now use json foramt for data 
const port = 8081;
const doList = ["gaming", "chating", "music"];
//http://localhost:8081/doList
app.get("/doList",(req,res)=>{
    //call back
    res.status(200).send(doList);
})
app.post("/doList",(req,res)=>{
    let newLIST=req.body.item;
    doList.push(newLIST);
    res.status(201).send({
        message:"data added"
    }).send(doList)
})
app.delete("/doList",(req,res)=>{
    const delitem=req.body.item;
    doList.find((ele,ind)=>{
        if(ele===delitem){
            doList.splice(ind,1);
        }
    });
    res.status(202).send({
        message:`deleted item - ${req.body.item}`
    }).send(doList);
})


app.get("/",(req,res)=>{
    res.status(201).send("<h1>WELL DONE ADITYA</h1>");
})
app.all("/doList",(req,res)=>{
    res.status(501).send();
})
app.all("*",(req,res)=>{
    res.status(404).send();
})
app.listen(port,()=>{
    console.log(`Node JS server Strted on Port ${port}`);
})