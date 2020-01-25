var express = require("express");
var app = express();
var fs = require("fs");
var port = process.env.port || 9800;
var moviesRouter = express.Router();
var productRouter = express.Router();

app.get('/', (req, res) =>{
    res.send('This is default page');
})

moviesRouter.route("/").get((req, res) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

moviesRouter.route("/details").get((req, res) => {
  res.send("This is Movies Detail page");
});

productRouter.route("/").get((req, res) => {
  fs.readFile("prod.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

productRouter.route("/details").get((req, res) => {
  res.send("This is Product Details page");
});

app.use('/movies', moviesRouter);
app.use('/product', productRouter);

app.listen(port, (err) =>{
    if(err) throw err;
    console.log('Express is listening at port ', port);
})
