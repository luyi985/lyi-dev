const express = require('express');
const server = express();

server.get('/test', (req, res) => {
    res.json({
        time: new Date().toString(),
        msg: "server running"
    })
})

server.listen(3001, () => {
    console.log('server running')
})