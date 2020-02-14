var express = require('express');
var fs = require('fs');
var moviesRouter = express.Router();
var moviesArray = [
    {
        "_id": "5ab12612f36d2879268f284a",
        "name": "Black Panther",
        "language": "ENGLISH",
        "rate": 4.5,
        "type": "Action Adventure Fantasy",
        "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
      },
      {
        "_id": "5ab12666f36d2879268f2902",
        "name": "Death Wish",
        "language": "ENGLISH",
        "type": "Action Crime Thriller",
        "rate": 3.2,
        "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
      },
      {
        "_id": "5ab12678f36d2879268f291d",
        "name": "Coco",
        "language": "ENGLISH",
        "type": "Adventure Animation Family",
        "rate": 5,
        "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
      }
];

function router(menu){
    moviesRouter.route('/')
    .get((req, res) =>{
        res.render('moviesRouter', {title: 'Movies Page', movies: moviesArray, menu})  //moviesRouter is a call to EJS file i.e. moviesRouter.ejs file
        // fs.readFile('db.json', 'utf-8', (err, data)=>{
        //     if(err) throw err;
        //     //res.send(data);
        //     res.render('moviesRouter', {title: 'Movies Page', movies: data});
        // })
    })

moviesRouter.route('/details')
    .get((req, res) =>{
        res.send('This is Movies details page');
    });

    return moviesRouter;
}


    module.exports = router;