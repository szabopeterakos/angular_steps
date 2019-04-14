import express from 'express';
import { json, urlencoded } from 'body-parser';
const expServer = express();
const port = 3000;

expServer.use(json());
expServer.use(
    urlencoded(
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
            request: 'req: ' + this.request
        })
    }
);

expServer.listen(port, () => {
    console.log(
        `My express server running on port: ${port}.`
    );
});

