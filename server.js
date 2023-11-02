// create an http server using nodejs

const http = require('http');

const { createArray, readArray, updateArray, deleteArray } = require('./newModule.js');

const server = http.createServer(function (req, res) {
    console.log(req.method, req.url);

    if (req.url == '/'){
        res.write("Request looks good.")
    }
    else if (req.url == '/create') {
        res.write(JSON.stringify(createArray(25)))
    }
    else if (req.url == '/read') {
        res.write(JSON.stringify(readArray()))
    }
    else if (req.url == '/update') {
        res.write(JSON.stringify(updateArray(0, 100)))
    }
    else if (req.url == '/delete') {
        res.write(JSON.stringify(deleteArray(0)))
    }

    res.end();
})

server.listen(5000, function () {
    console.log("Server is up and running on port 5000")
})
