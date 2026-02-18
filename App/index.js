const express = require('express');
const mysql = require('mysql2');
const os = require('os');
const crypto = require('crypto');

const app = express();
const port = 80;

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

app.get('/', (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect(err => {
        if (err) {
            console.error('Connect failed: ' + err.stack);
            res.status(500).send('Connect failed: ' + err.message);
            return;
        }

        const valor_rand1 = Math.floor(Math.random() * 999) + 1;
        const valor_rand2 = crypto.randomBytes(4).toString('hex').toUpperCase().substring(1);
        const host_name = os.hostname();

        const query = "INSERT INTO dados (AlunoID, Nome, Sobrenome, Endereco, Cidade, Host) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [valor_rand1, valor_rand2, valor_rand2, valor_rand2, valor_rand2, host_name];

        connection.query(query, values, (error, results, fields) => {
            if (error) {
                console.error('Error: ' + error.message);
                res.status(500).send('Error: ' + error.message);
            } else {
                res.send(`
                    <html>
                    <head><title>Exemplo Node.js</title></head>
                    <body>
                        Versao Atual do Node.js: ${process.version}<br>
                        New record created successfully
                    </body>
                    </html>
                `);
            }
            connection.end();
        });
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});
