//to install dependencies run= npm init -y
//to install express packet  run= npm i express, npm i axios, npm i nodemon
//const express=require('express');          //type=common
import express from 'express';               //type=module
const app=express();                         //create server
const port=3000;
app.get('/',(req,res)=>{
    res.send("<h1>welcome to express</h1>")  // get automatically change the text type according to the requirements
});

app.use(express.json());  //middleware
app.post('/users',(req,res)=>{
    // const data=req.body;
    // res.send(`My name is ${data.name}`)
    const {name}=req.body;
    res.send(`My name is ${name}`)
});
app.get('/api/:name/:rollno',(req,res) => {
    try {
        const { name, rollno} = req.params;
        res.send(`Welcome ${name} and Your roll no. is ${rollno}`);
    } catch (error) {
        console.log(`Error is : $(error.message)`)
    }
});

//http://localhost:3000/api?name=Rajesh&rollno=10
app.get('/api',(req,res)=>{
    // const {name = "Guest",rollno = 100} = req.query;
    const {name,rollno} = req.query;
    const data = req.query;
    try {
        if(!name){
            return res.status(400).send("Name is required");
        }
        else{
            res.send(`Welcome to ABES: ${name} and Roll no.id ${rollno}`)
        }
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }



    // if(!name){
    //     return res.status(400).send("Name is required");
    // }
    // else{
    //     res.send(`Welcome to ABES: ${name} and Roll no.id ${rollno}`)
    // }
    console.log(data)
    // res.send(`Welcome to ABES: ${name} and Roll no.id ${rollno}`)  // get automatically change the text type according to the requirements
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// Now we will implement CRUD (create,read,update,delete)

//GET -> retrieve list of users (data send through url)
//POST -> create new user
//PUT -> user update
//PATCH -> minor changes
//DELETE -> delete user

//http://localhost:3000/api?name=Rajesh (to get name of any user through query string using ? )