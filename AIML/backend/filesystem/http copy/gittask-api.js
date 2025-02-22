
const http = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async(req,res) => {
    console.log('Hello from the Server!');
    res.writeHead(200, {"Content-Type": "text/html"});//application/json => for pretty print
    // const response = await fetch("https://api.github.com/users");
    // const data = await response.json();

    //const response = await axios.get("https://api.github.com/users"); 

    const response = await axios.get("https://api.github.com/search/users",{
        params:{
            q:"location:ghaziabad"
        }
    }); // no need of parsing in axios 
    // const productsdata = await response.data;
    const productsdata = response.data.items;
    let frontdata = `<html><Head></Head></html><body>`
    productsdata.forEach((user)=>{
        frontdata += `<div><img src="${user.avatar_url}"></div>`
    });
    frontdata += `</body></html>`; // datatype of frontdata is string
    
    res.end(frontdata);
});

// api gives you data in form of promise to deal it we use async and await(line 7)

//npm i nodemon -g (-g use for global)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//npm i axios(to install packages instead using fetch)
//API => response object conversion use => .json, .text