var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

router.get('/', function(req, res, next) {

    dbConn.query('Select Ksiazki.ID AS ID,ISBN, Autor, Tytul, Wypozyczajacy  From Ksiazki LEFT JOIN Wypozyczenia ON Ksiazki.ID = Wypozyczenia.ID ORDER BY Autor asc',function(err,rows)     {

        if(err) {
            res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
        } else {
            res.render('katalog',{data:rows});
        }
    });
});


router.get('/zwroc/(:ID)', function(req, res, next) {

    let id = req.params.ID;

    dbConn.query('DELETE FROM Wypozyczenia WHERE ID = ' + id, function(err, result) {
        if (err) {

            res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
        } else {
            res.redirect('/katalog')
        }
    })
});

router.get('/wypozycz/(:ID)', function(req, res, next) {

    let id = req.params.ID;

    dbConn.query('SELECT * FROM Ksiazki WHERE id = ' + id, function(err, rows, fields) {
        if(err) throw err

        if (rows.length <= 0) {
            res.redirect('/')
        }
        else {
            res.render('wypozycz', {
                title: 'Wypożycz ksiażkę '+rows[0].Tytul+' autorstwa '+rows[0].Autor + ".",
                ID: rows[0].ID,
                Wypozyczajacy:"",
                problem:"",
            })
        }
    })
})


router.post('/wypozycz/(:ID)', function(req, res, next) {

    let ID = req.params.ID;
    let Wypozyczajacy = req.body.Wypozyczajacy;
    let errors = false;

    if(Wypozyczajacy.length === 0 ) {
        errors = true;


        dbConn.query('SELECT * FROM Ksiazki WHERE id = ' + ID, function(err, rows, fields) {
            if(err) throw err

            if (rows.length <= 0) {
                res.redirect('/')
            }
            else {
                res.render('wypozycz', {
                    title: 'Wypożycz ksiażkę '+rows[0].Tytul+' autorstwa '+rows[0].Autor + ".",
                    ID: rows[0].ID,
                    Wypozyczajacy:Wypozyczajacy,
                    problem:"Uzupełnij pole wypożyczającego.",
                })
            }
        })
    }

    if( !errors ) {

        var form_data = {
            ID: ID,
            Wypozyczajacy: Wypozyczajacy
        }
        dbConn.query('INSERT INTO Wypozyczenia SET ? ', form_data, function(err, result) {
            if (err) {

                res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
            } else {
                res.redirect('/katalog');
            }
        })
    }
})



module.exports = router;