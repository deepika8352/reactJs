const express=require('express');
const mongoose=require('mongoose');
const product=require('./model/product');
const app=express();
app.use(express.json());
//mongodb://localhost:27017/tododb
mongoose.connect("mongodb://localhost:27017/TodoDB",
    {useNewUrlParser:true,useUnifiedTopology:true}
    ).then(()=>{console.log("connection established")}
    ).catch(err=>console.log("Error occured",err));
app.get("/dbfetchtodo",(req,res)=>{
    console.log("dbfetchtodo method called");
    res.send("dbfetchtodo method called");
});
app.post("/dbaddtodo",(req,res)=>{
    const newTask=new Todo({todo:req.body.todo});
    newTask.save();
    res.send(newTask);
});
app.get("/dbfetchtodo",async(req,res)=>{
    const tasks=await Todo.find()
    res.json(tsks);
});
app.listen(5000,function(){
    console.log("port listening on 5000");
});