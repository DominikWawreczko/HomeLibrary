const dbConn  = require('../config/db');

exports.addOpinionGet = function(req, res, next) {

    dbConn.query('Select ISBN, Author, Title  From  Books ',function(err,rows)     {

        if(err) {
            res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
        } else {
            res.render('addReview',{
                data:rows,
                ISBN: '',
                Review: '',
                Writer: '',
                problem: '',
            });
        }
    });
};

exports.addOpinionPost = function(req, res, next) {

    let ISBN = req.body.ISBN;
    let Review = req.body.Review;
    let Writer = req.body.Writer;

    let errors = false;

    if( Review.length === 0 || Writer.length === 0) {
        errors = true;


        dbConn.query('Select ISBN, Author, Title  From  Books ',function(err,rows)     {

            if(err) {
                res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
            } else {
                res.render('addReview',{
                    data:rows,
                    ISBN: ISBN,
                    Review: Review,
                    Writer: Writer,
                    problem: 'Wszystkie pola muszą być uzupełnione',
                });
            }
        });


    }

    if( !errors ) {

        var form_data = {
            ISBN: ISBN,
            Review: Review,
            Writer: Writer,
        }
        dbConn.query('INSERT INTO Reviews SET ? ', form_data, function(err, result) {
            if (err) {
                res.render('index',{problem: "Ups pojawił się jakiś problem \!"})
            } else {
                res.redirect('/katalogopini');
            }
        })
    }
};