const updateDataInDataBase = userData => {
    
    const db_cmd = `UPDATE usersData SET name='${userData.name}', email='${userData.email}', phoneNumber='${userData.phoneNumber}' WHERE ${userData.key}='${userData.value}'`
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

module.exports = updateDataInDataBase;