const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const server = express();

server.use(express.static('public'));

server.get('/*', (request, response) => {
    response.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
