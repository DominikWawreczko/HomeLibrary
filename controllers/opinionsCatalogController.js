const dbConn  = require('../config/db');


exports.opinionCatalogGet = function(req, res, next) {

    dbConn.query('Select Autor, Tytul, Opinia, Wystawiajacy  From Opinie LEFT JOIN Ksiazki ON Ksiazki.ISBN = Opinie.ISBN ORDER BY Tytul asc',function(err,rows)     {

        if(err) {
            res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
        } else {
            res.render('opinionsCatalog',{data:rows});
        }
    });
};