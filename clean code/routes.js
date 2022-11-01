const fs = require('fs')

const requestHandler = (req,res) => {
    if(req.url==='/'){
        res.write('<html>')
        res.write('<head><title>writing reading</title></head>')
        res.write(`<body> <form action="/message" method="POST"> <input type="text" name="msg"><button type="submit">Send</button></form></body>`)
        res.write('</html>')
        return res.end()
    }
    if(req.url==='/message' && req.method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split('=')[1];
            fs.writeFile('./clean code/message.txt',`${message}`,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            })
        })
    }

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Welcome Home</title></head>')
        res.write('<body><h1>Welocome to my Node JS project</h1></body>')
        res.write('</html>')
        res.end();
       
};

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler
//     someText: "text"
// }

// module.exports.handler = requestHandler;
// module.exports.someText = "text";