const express = require("express");
const mongod = require('mongodb')
const app = express();
const db=require("./dbConnection")

//open mongodb connection
//const client = new mongod("mongodb+srv://sraawan:t6YzXREo0WO8Jrqw@cluster0.agk99eu.mongodb.net/")
db.once('open',function(){
    console.log('connected..')
})

app.get('/data',async(req,res)=>{
    const users = await  db.sample_traning.companies.find()
    console.log(users)
})
app.listen(4000,()=>{
console.log("node server started")
})
