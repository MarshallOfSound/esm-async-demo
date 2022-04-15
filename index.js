const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/test.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    setTimeout(() => {
        res.write(fs.readFileSync(path.resolve(__dirname, 'static', 'test.js'), 'utf8'));
        res.end();
    }, 4000);
})

app.use(express.static(path.resolve(__dirname, 'static')));

app.listen(3030);

console.log('Open a new tab in your browser to test each of these');
console.log('Module (async): http://localhost:3030/async.html');
console.log('Non-module (blocking): http://localhost:3030/sync.html');
console.log('Notice in the non-module case the image doesn\'t load until the script finishes loading, module however is async and the syncronous action of page rendering continues in the background while the script is loaded');
