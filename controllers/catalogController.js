var dbConn  = require('../config/db');


exports.catalogGet = function(req, res, next) {

    dbConn.query('Select Ksiazki.ID AS ID,ISBN, Autor, Tytul, Wypozyczajacy  From Ksiazki LEFT JOIN Wypozyczenia ON Ksiazki.ID = Wypozyczenia.ID ORDER BY Autor asc',function(err,rows)     {

        if(err) {
            res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
        } else {
            res.render('catalog',{data:rows});
        }
    });
};
exports.returnBookGet = function(req, res, next) {

    let id = req.params.ID;

    dbConn.query('DELETE FROM Wypozyczenia WHERE ID = ' + id, function(err, result) {
        if (err) {

            res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
        } else {
            res.redirect('/katalog')
        }
    })
};
exports.rentBookGet = function(req, res, next) {

    let id = req.params.ID;

    dbConn.query('SELECT * FROM Ksiazki WHERE id = ' + id, function(err, rows, fields) {
        if(err) throw err

        if (rows.length <= 0) {
            res.redirect('/')
        }
        else {
            res.render('rent', {
                title: 'Wypożycz ksiażkę '+rows[0].Tytul+' autorstwa '+rows[0].Autor + ".",
                ID: rows[0].ID,
                Wypozyczajacy:"",
                problem:"",
            })
        }
    })
};
exports.rentBookPost= function(req, res, next) {

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
                res.render('rent', {
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
};