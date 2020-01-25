var express = require("express");
var app = express();
var fs = require("fs");
var morgan = require('morgan');
var port = process.env.port || 9800;
var chalk = require('chalk');

var menu = [
  {name: 'Home', link:'/'},
  {name: 'Movies', link: 'movies'},
  {name: 'Products', link: 'product'}
];

var moviesRouter = require("./src/routes/moviesRouter")(menu);
var productRouter = require("./src/routes/productRouter")(menu);

app.use(morgan('tiny'));
//static file path
app.use(express.static(__dirname + '/public'));
//View files path
app.set('views', './src/views');
//View engine
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  // res.send("This is default page"); //this is mentioned when we dont use any tamplate engine
  res.render('index',{title: 'Home Page', menu});  //this is used for EJS template engine
});

app.use("/movies", moviesRouter);
app.use("/product", productRouter);

app.listen(port, err => {
  if (err) throw err;
  console.log(chalk.yellow(`Express is listening at port ${port}`));
});
