/*const fs = require('fs/promises');
const read= async () => {                               //async and (async is way to read or write any file,it can be done with sync or async)
    const data = await fs.readFile("./data.txt","utf8");    // await is use to resolve the problem of pending 
    console.log(data)
}
read();
*/




const fs = require('fs/promises');
const read= async () => {                               
    try{
        const data = await fs.readFile("./data.txt","utf8");     
    console.log(data)
    }
    catch(error){
        console.log(error.message)

    }
}
const write= async () => {                               
    try{
        const data = await fs.writeFile("./data2.txt","This is my new file","utf8");     
        console.log(data)
    }
    catch(error){
        console.log(error.message)
    
    }
}
read();
write();