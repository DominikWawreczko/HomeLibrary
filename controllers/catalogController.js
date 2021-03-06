var dbConn  = require('../config/db');


exports.catalogGet = function(req, res, next) {

    dbConn.query('Select Books.ID AS ID,ISBN, Author, Title, Borrower  From Books LEFT JOIN Borrow ON Books.ID = Borrow.ID ORDER BY Author asc',function(err,rows)     {

        if(err) {
            res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
        } else {
            res.render('catalog',{data:rows});
        }
    });
};
exports.returnBookGet = function(req, res, next) {

    let id = req.params.ID;

    dbConn.query('DELETE FROM Borrow WHERE ID = ' + id, function(err, result) {
        if (err) {

            res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
        } else {
            res.redirect('/katalog')
        }
    })
};
exports.rentBookGet = function(req, res, next) {

    let id = req.params.ID;

    dbConn.query('SELECT * FROM Books WHERE id = ' + id, function(err, rows, fields) {
        if(err) throw err

        if (rows.length <= 0) {
            res.redirect('/')
        }
        else {
            res.render('borrow', {
                Title: 'Wypożycz ksiażkę '+rows[0].Title+' autorstwa '+rows[0].Author + ".",
                ID: rows[0].ID,
                Borrower:"",
                problem:"",
            })
        }
    })
};
exports.rentBookPost= function(req, res, next) {

    let ID = req.params.ID;
    let Borrower = req.body.Borrower;
    let errors = false;

    if(Borrower.length === 0 ) {
        errors = true;


        dbConn.query('SELECT * FROM Books WHERE id = ' + ID, function(err, rows, fields) {
            if(err) throw err

            if (rows.length <= 0) {
                res.redirect('/')
            }
            else {
                res.render('borrow', {
                    Title: 'Wypożycz ksiażkę '+rows[0].Title+' autorstwa '+rows[0].Author + ".",
                    ID: rows[0].ID,
                    Borrower:Borrower,
                    problem:"Uzupełnij pole wypożyczającego.",
                })
            }
        })
    }

    if( !errors ) {

        var form_data = {
            ID: ID,
            Borrower: Borrower
        }
        dbConn.query('INSERT INTO Borrow SET ? ', form_data, function(err, result) {
            if (err) {

                res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
            } else {
                res.redirect('/katalog');
            }
        })
    }
};