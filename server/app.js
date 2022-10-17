const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Welcome Home</title></head>')
    res.write('<body><h1>Welocome to About us Page</h1></body>')
    res.write('<body><h2>Welocome to my Node JS project</h2></body>')
    res.write('</html>')
    res.end();
})

server.listen(4000);