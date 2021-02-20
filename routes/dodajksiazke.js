var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');



module.exports = router;
router.get('/', function(req, res, next) {
    // render to add.ejs
    res.render('dodajksiazke', {
        ISBN: '',
        Autor: '',
        Tytul: '',
    })
});


router.post('/', function(req, res, next) {

    let ISBN = req.body.ISBN;
    let Autor = req.body.Autor;
    let Tytul = req.body.Tytul;

    let errors = false;

    if(Autor.length === 0 || ISBN.length === 0 || Tytul.length === 0) {
        errors = true;

        // set flash message
        //req.flash('error', "Please enter name and author");
        // render to add.ejs with flash message
        res.render('/')
    }

    // if no error
    if( !errors ) {

        var form_data = {
            ISBN: ISBN,
            Autor: Autor,
            Tytul: Tytul,
        }
        // update query
        dbConn.query('INSERT INTO Ksiazki SET ? ', form_data, function(err, result) {
            //if(err) throw err
            if (err) {
                // set flash message
                //req.flash('error', err)
                // render to edit.ejs
                res.render('/')
            } else {
                //req.flash('success', 'Book successfully updated');
                res.redirect('/katalog');
            }
        })
    }
})
module.exports = router;

