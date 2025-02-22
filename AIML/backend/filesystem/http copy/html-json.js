const http = require('http');
const fs = require('fs/promises');

// const users = [{
//     id: 1,
//     name: 'Harsh',
//     email: 'harsh@example.com',
// },{
//     id: 2,
//     name: 'Prachi',
//     email: 'prachi@example.com',
// },{
//     id: 3,
//     name: 'Roy',
//     email: 'roy@example.com',
// }]

const server = http.createServer(async (req,res) => 
{
    // res.statusCode = 200;
    // res.setHeader('Content-Type','text/plain');
    res.writeHead(200,{'Content-Type': 'application/json'});
    const jdata = await fs.readFile("./new.json","utf8");
    const users = JSON.parse(jdata);


    // const data=users.map((user) => {
    //     return user.name;
    // })
//----------------------------------------------------------------------------//
    // here we use forEach for fetching output in string format but forEach will not return anything
    // we will append it in a let variable
    // let data = ""
    // users.forEach((user) => {
    //     data +=" "+user.name;
    // })



    // when we have to convert string to object then we have to use command :- JSON.parse
    //object to string :- JSON.stringfy       ((users[0])) :- used to fetch all information of particular candidate
    res.end(JSON.stringify(users));
    //with indexing[] we can send particular information
});
port = 3000;

server.listen(3000, () => {
    console.log(`Server is running in ${port}`);
})