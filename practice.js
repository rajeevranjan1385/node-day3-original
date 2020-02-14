//code in app.js
const express = require("express");
const app = express();
const moviesRouter = require("./src/routes/moviesRouter")(menu);
const productRouter = require("./src/routes/productRouter")(menu);
const morgan = requie("morgan");
const chalk = require("chalk");

const port = process.env.port || 8900;
const menu = [
  { name: "Home", link: "/" },
  { name: "Movies", link: "movies" },
  { name: "Product", link: "product" }
];

app.use(morgan("tiny"));

app.use(express.static(__dirname + "/public"));
app.get("views", "./src/views");
app.get("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page", menu });
});
app.use("/movies", moviesRouter);
app.use("product", productRouter);

app.listen(port, err => {
  if (err) throw err;
  console.log(chalk.yellowgreen(`Server is listening at port ${port}`));
});

//code in MoviesRouter.js
//we will be creating folders: src/views/product.ejs and src/views/movies.ejs
//folder: public under main folder for js and css files
//folder: src/routes: moviesrouter productrouter
const express = require("express");
const moviesRouter = express.Router();
const moviesArray = [
  {
    _id: "5ab12612f36d2879268f284a",
    name: "Black Panther",
    language: "ENGLISH",
    rate: 4.5,
    type: "Action Adventure Fantasy",
    imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg"
  },
  {
    _id: "5ab12666f36d2879268f2902",
    name: "Death Wish",
    language: "ENGLISH",
    type: "Action Crime Thriller",
    rate: 3.2,
    imageUrl: "https://image.ibb.co/gC9PfH/dw.jpg"
  }
];

function router(menu) {
  moviesRouter.route("/").get((req, res) => {
    res.render("movies", { title: "Movies Page", menu });
  });

  moviesRouter.route("/details").get((req, res) => {
    res.send("This is Movies details page");
  });
  return moviesRouter;
}

module.exports = router;

//code in product.js
const express = require("express");
const productRouter = express.Router();
const productArray = [
  {
    _id: "5a05dacc734d1d68d42d31f3",
    productId: 1,
    productName: "Leaf Rake",
    productCode: "GDN-0011",
    releaseDate: "March 19, 2016",
    description: "Leaf rake with 48-inch wooden handle.",
    price: 19.95,
    starRating: 3.5,
    imageUrl:
      "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  }
];
function router(menu) {
  productRouter.route("/").get((req, res) => {
    res.render("product", {
      title: "Product Page",
      productArray: productArray,
      menu
    });
  });

  productRouter.route("/details").get((req, res) => {
    res.send("This is details page");
  });

  return productRouter;
}

module.exports = router;
