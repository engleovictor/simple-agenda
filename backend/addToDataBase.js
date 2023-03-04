const addToDataBase = userData => {
    
    const db_cmd = `INSERT INTO usersData(name, email, phoneNumber) VALUES("${userData.name}","${userData.email}","${userData.phoneNumber}")`
    console.log(db_cmd);

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'simple-agenda',
    password : 'senha_super_forte',
    database : 'base_de_dados_simple_agenda'
    });

    connection.connect();

    connection.query(db_cmd, (error, results, fields) => {
    if (error) throw error;
    
    });

    connection.end();
}

module.exports = addToDataBase;