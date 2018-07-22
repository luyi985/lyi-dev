const express = require('express');
const server = express();
const path = require('path');
path.resolve(__dirname, '../../');
server.use(express.static('public'));

server.get('/test', (req, res) => {
    res.json({
        time: new Date().toString(),
        msg: 'server running',
    });
});

server.listen(3001, () => {
    console.log('server running');
});
