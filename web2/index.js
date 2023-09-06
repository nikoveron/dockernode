const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 80;

app.get('/', async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hola respuesta desde el contenedor 2 y listar los alumnos del contenedor de Mysql</title>
            <style>
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid black; padding: 8px; text-align: left; }
            </style>
        </head>
        <body>
            <h2>Hola respuesta desde el contenedor 2</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Apellidos</th>
                    <th>Nombres</th>
                    <th>DNI</th>
                </tr>
    `);

    const connection = mysql.createConnection({
        host: '172.17.0.2',  // Nombre del contenedor MySQL en la red Docker
        user: 'root',
        password: 'root1',
        database: 'prueba'
    });

    connection.connect();

    const query = 'SELECT id, apellidos, nombres, dni FROM alumnos';
    connection.query(query, (error, results) => {
        if (error) {
            res.write(`<tr><td colspan="4">Error al obtener los datos de la base de datos.</td></tr>`);
        } else {
            results.forEach(row => {
                res.write(`
                    <tr>
                        <td>${row.id}</td>
                        <td>${row.apellidos}</td>
                        <td>${row.nombres}</td>
                        <td>${row.dni}</td>
                    </tr>
                `);
            });
        }

        res.write(`
            </table>
        </body>
        </html>
        `);
        res.end();

        connection.end();
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
