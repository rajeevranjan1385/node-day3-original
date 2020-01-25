var express = require("express");
var app = express();
var fs = require("fs");
var port = 8900;

app.get('/', function(req, res){
    res.send('This is a default page');
})

app.get('/products', function(req, res){
    fs.readFile('prod.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
});

app.get('/movies', (req, res)=>{
    fs.readFile('db.json', 'utf-8', (err, data) => {
        if(err) throw err;
        res.send(data);
    })
} )

app.listen(port, (err)=>{
    if(err) throw err;
    console.log('Express is listening at port ', port);
})