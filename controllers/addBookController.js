const dbConn  = require('../config/db');


exports.addBookGet =  function(req, res, next) {
    res.render('addBook', {
        ISBN: '',
        Author: '',
        Title: '',
        problem: '',
    })
};

exports.addBookPost = function(req, res) {

    let ISBN = req.body.ISBN;
    let Author = req.body.Author;
    let Title = req.body.Title;

    let errors = false;

    if(Author.length === 0 || ISBN.length === 0 || Title.length === 0) {
        errors = true;

        res.render('addBook',{
            ISBN: ISBN,
            Author: Author,
            Title: Title,
            problem: "Wszystkie pola muszą być uzupełnione",
        })
    }

    if( !errors ) {
        var form_data = {
            ISBN: ISBN,
            Author: Author,
            Title: Title,
        }

        dbConn.query('INSERT INTO Books SET ? ', form_data, function(err, result) {
            if (err) {
                res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
            } else {
                res.redirect('/katalog');
            }
        })
    }
};