var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display books page
router.get('/', function(req, res, next) {

    dbConn.query('Select Ksiazki.ID AS ID,ISBN, Autor, Tytul, Wypozyczajacy  From Ksiazki LEFT JOIN Wypozyczenia ON Ksiazki.ID = Wypozyczenia.ID ORDER BY ID desc',function(err,rows)     {

        if(err) {
            // render to views/books/index.ejs
            res.render('index');
        } else {
            // render to views/books/index.ejs
            res.render('katalog',{data:rows});
        }
    });
});


router.get('/zwroc/(:ID)', function(req, res, next) {

    let id = req.params.ID;

    dbConn.query('DELETE FROM Wypozyczenia WHERE ID = ' + id, function(err, result) {
        //if(err) throw err
        if (err) {
            // set flash message
           // req.flash('error', err)
            // redirect to books page
            res.redirect('/')
        } else {
            // set flash message
           // req.flash('success', 'Book successfully deleted! ID = ' + id)
            // redirect to books page
            res.redirect('/katalog')
        }
    })
});

// display edit book page
router.get('/wypozycz/(:ID)', function(req, res, next) {

    let id = req.params.ID;

    dbConn.query('SELECT * FROM Ksiazki WHERE id = ' + id, function(err, rows, fields) {
        if(err) throw err

        // if user not found
        if (rows.length <= 0) {
           // req.flash('error', 'Book not found with id = ' + id)
            res.redirect('/')
        }
        // if book found
        else {
            // render to edit.ejs
            res.render('wypozycz', {
                title: 'Wypożycz ksiażkę '+rows[0].Tytul+' autorstwa '+rows[0].Autor + ".",
                ID: rows[0].ID,
                Wypozyczajacy:"",
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

        // set flash message
        //req.flash('error', "Please enter name and author");
        // render to add.ejs with flash message
        res.render('/')
    }

    // if no error
    if( !errors ) {

        var form_data = {
            ID: ID,
            Wypozyczajacy: Wypozyczajacy
        }
        // update query
        dbConn.query('INSERT INTO Wypozyczenia SET ? ', form_data, function(err, result) {
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