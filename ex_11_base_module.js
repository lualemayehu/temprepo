const  http = require('http');
const server= http.createServer((req, res)=> {
    if (req.url ==='/'){
    res.end('welcom to our home page');
    }
    if (req.url ==='/about'){
        res.end('About page');
    }
    res.end(`
    <h1> Oops!</h1>
    <p>We can find the page you are looking for</p>
    <a href="/">Back to Home</a>
    `)
})

server.listen(5000);