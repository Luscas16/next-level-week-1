const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
    //Cria tabela

    /*db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //Inserção de dados

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "PaperSider",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Caratina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]

    db.run(query, values, function(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)
    })*/

    //Consulta de dados

    /*db.all(`SELECT name FROM places `, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Registros: ")
        console.log(rows)
    })*/

    //Remoção de dados

    /*db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Excluído com sucesso!")
    })*/

})

module.exports = db