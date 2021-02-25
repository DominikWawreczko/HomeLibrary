var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');



module.exports = router;
router.get('/', function(req, res, next) {
    res.render('addBook', {
        ISBN: '',
        Autor: '',
        Tytul: '',
        problem: '',
    })
});


router.post('/', function(req, res, next) {

    let ISBN = req.body.ISBN;
    let Autor = req.body.Autor;
    let Tytul = req.body.Tytul;

    let errors = false;

    if(Autor.length === 0 || ISBN.length === 0 || Tytul.length === 0) {
        errors = true;

        res.render('dodajksiazke',{
            ISBN: ISBN,
            Autor: Autor,
            Tytul: Tytul,
            problem: "Wszystkie pola muszą być uzupełnione",
        })
    }

    if( !errors ) {

        var form_data = {
            ISBN: ISBN,
            Autor: Autor,
            Tytul: Tytul,

        }
        dbConn.query('INSERT INTO Ksiazki SET ? ', form_data, function(err, result) {
            if (err) {
                res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
            } else {
                res.redirect('/katalog');
            }
        })
    }
})
module.exports = router;

