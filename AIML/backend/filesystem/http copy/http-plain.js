const http = require('http');  // importing of the http module
const fs = require('fs/promises');
const server = http.createServer(async (req,res) =>    // here we create a server
{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello, World!<h1/>");
    const data = await fs.readFile("./homepg.html","utf8");     
        
    res.end(data);
    read();
});
port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// if we will remove the port from this code then our port will be randomly assigned b/w 49000 to 

// server.listen(() => {
//     const a = server.address();
//     console.log(`Server is running on port ${a.port}`);
// });