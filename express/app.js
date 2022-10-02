var express = require('express');
var app = express();
var os = require('os');

app.get('/', function (req,res) {
    res.send('<h2>Welcome to ' + os.hostname() + '</h2>\n');
});
app.listen(8000, () => 
    console.log('Express is ready at http://localhost:8000')
);
