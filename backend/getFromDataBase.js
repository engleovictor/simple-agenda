const getFromDataBase = keyPair =>  {
    return new Promise((res,rej) => {
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'simple-agenda',
        password : 'senha_super_forte',
        database : 'base_de_dados_simple_agenda'
        });

        connection.connect();

        if(keyPair.key === 'showAll') {
            const db_cmd = `SELECT id,name,email,phoneNumber from usersData`;
            connection.query(db_cmd, (error,results,fields) => {
                if(error) throw error;
                res(results)
            })
        } else {
            const db_cmd = `SELECT id,name,email,phoneNumber from usersData WHERE ${keyPair.key}='${keyPair.value}'`;
            connection.query(db_cmd, (error, results, fields) => {
                if(error) throw error;
                res(results)
            })

        }
    })
}

module.exports = getFromDataBase;