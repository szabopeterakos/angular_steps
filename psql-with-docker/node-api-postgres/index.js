const express = require('express');
const bodyParser = require('body-parser');
const expServer = express();
const port = 3000;
const db = require('./query');
const conninfo = 'You are connected to database "postgres" as user "postgres" via socket in "/var/run/postgresql" at port "5432".';
const api = 'You are now connected to database "api" as user "me".';

expServer.use(bodyParser.json());
expServer.use(
    bodyParser.urlencoded(
        {
            extended: true,
        }
    )
);

expServer.get(
    '/api',
    (request, response) => {
        response.json({
            info: 'Node.js, Express, and Postgres API',
            request: 'req: ' + this.request,
            date: new Date()
        })
    }
);

expServer.get('/users', db.getUsers);
expServer.get('/users/:id', db.getUserById);
expServer.post('/users', db.createUser);
expServer.put('/users/:id', db.updateUser);
expServer.delete('/users/:id', db.deleteUser);

expServer.listen(port, () => {
    console.log(
        `My express server running on port: ${port}.`
    );
});