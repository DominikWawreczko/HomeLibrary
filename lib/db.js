var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'wawreczk_1153608',
    password: '063458s*L',
    database: 'WWW20_WAWRECZKO'
});
connection.connect(function(error){
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected..!');
    }
});

module.exports = connection;


