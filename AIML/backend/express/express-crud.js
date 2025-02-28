import express from 'express';
const users =[{
    id: 1,
    name: 'Nidhi',
    email: 'nidhi@abes.ac.in'
}]
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Welcome to my API");
});

app.get("/getusers",(req,res)=>{
    res.send(users);   // here we don't want to convert it into string and don't want to tell what type of content data it (like taxt or json)
});

app.get("/api",(req,res)=>{
    res.send("Welcome to my new API");
});



app.use(express.json()); // built in middleware

//in middleware its order matters usually we make it on top

// we use the same type of middleware in which data send or recives like text or json
// get and post both can send data but for good prg we should use for their main task

app.post("/api/createuser",(req,res)=>{
    const {name,email} = req.body;
    const newid=users.length>0? users[users.length-1].id+1:1;
    users.push({id:newid,name,email});
    res.status(201).send("User created successfully");
});

//http://localhost:3000/getusers/2  => to retrieve the data of any specific parameter (using params)
app.get("/getusers/:id",(req,res)=>{
    const{id}=req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


// http will not save the data as a result when 