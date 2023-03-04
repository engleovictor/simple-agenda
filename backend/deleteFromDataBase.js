const deleteFromDataBase = keyPair => {
    return new Promise( (res,rej) => {
        const db_cmd = `SELECT id,name,email,phoneNumber from usersData WHERE ${keyPair.key}='${keyPair.value}'`
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
        if(results.length == 0) {
            connection.end();
            res({
                err: 0
            });
        } else {
            const rm_cmd = `DELETE FROM usersData WHERE ${keyPair.key}='${keyPair.value}'`
            console.log(rm_cmd);
            connection.query(rm_cmd, (rmerror, rmresults, rmfields) => {
                if (rmerror) throw rmerror;
                connection.end();
                res({
                    err: 1
                });
            })
            
        }
        });
    })
}

module.exports = deleteFromDataBase;