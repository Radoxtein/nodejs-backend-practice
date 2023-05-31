const http = require("http")

const server = http.createServer((req, res)=> {
    if (req.url === "/") {
        res.end("thiss is the home page")
    }
    if (req.url === "/about") {
        res.end("this is the about page")
    }
    res.end(
        `
        <p>Sorry this page does not exist</p>
        <h1>error 404 </h1>
        `
    )

})

server.listen(5100)