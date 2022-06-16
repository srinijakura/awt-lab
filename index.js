var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res)
{
    if(req.url=='/')
    {
        fs.readFile("demo.txt",function(err,data)
        {
            res.write("this is home")
            res.end()
        })
    }
    else if(req.url == "/home")
    {
        res.write("This is home page")
        res.end()
    }
})
    server.listen(3000)
    console.log("Server Started")