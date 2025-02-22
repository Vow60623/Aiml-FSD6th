const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async (req, res) => 
{
    
    if(req.url == '/'){
        res.setHeader('Content-Type','application/json');
        const jdata = await fs.readFile("./new.json","utf8");
        const users = JSON.parse(jdata);
        res.end(JSON.stringify(users));
    }
    else if(req.url == '/homepg'){
        res.setHeader('Content-Type','text/html');
        const data = await fs.readFile("./homepg.html","utf8");
        res.end(data);
    }
    else{
        const a = await fs.readFile("./error.html","utf8");
        res.end(a);
    }

});

port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
