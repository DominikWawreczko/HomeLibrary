var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');



module.exports = router;



router.get('/', function(req, res, next) {

    dbConn.query('Select ISBN, Autor, Tytul  From  Ksiazki ',function(err,rows)     {

        if(err) {
            res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
        } else {
            res.render('dodajopinie',{
                data:rows,
                ISBN: '',
                Opinia: '',
                Wystawiajacy: '',
                problem: '',
            });
        }
    });
});

router.post('/', function(req, res, next) {

    let ISBN = req.body.ISBN;
    let Opinia = req.body.Opinia;
    let Wystawiajacy = req.body.Wystawiajacy;

    let errors = false;

    if( Opinia.length === 0 || Wystawiajacy.length === 0) {
        errors = true;


        dbConn.query('Select ISBN, Autor, Tytul  From  Ksiazki ',function(err,rows)     {

            if(err) {
                res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
            } else {
                res.render('dodajopinie',{
                    data:rows,
                    ISBN: ISBN,
                    Opinia: Opinia,
                    Wystawiajacy: Wystawiajacy,
                    problem: 'Wszystkie pola muszą być uzupełnione',
                });
            }
        });


    }

    if( !errors ) {

        var form_data = {
            ISBN: ISBN,
            Opinia: Opinia,
            Wystawiajacy: Wystawiajacy,
        }
        dbConn.query('INSERT INTO Opinie SET ? ', form_data, function(err, result) {
            if (err) {
                 res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
            } else {
                res.redirect('/katalogopini');
            }
        })
    }
})


module.exports = router;
