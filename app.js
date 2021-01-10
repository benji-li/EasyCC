const express = require('express');
const app = express();
const port = 3000;

app.use("/", express.static(__dirname + '/dialog'));

app.get('/transcribe', (req, res) => {
    res.send({'message': 'Hello World!'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});