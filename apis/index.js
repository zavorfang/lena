const xpres = require('express');
const path = require('path');

const app = xpres();
const port = 3000;

const abs = (rel) => {
    return path.join(__dirname, rel);
}

app.listen(port);
app.get('/', (req, res) => {
    console.log(req.headers);
    res.sendFile(abs('./views/index.html'));
});