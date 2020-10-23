import express from 'express';
import bodyParser from 'body-parser';
import jsonResponseMiddleware from './middleware/json-response-middleware.js';
import loggerMiddleware from './middleware/http-logger-middleware.js';
import contentRouter from './routes/contentRouter.js';
// console.log('Project started');

const PORT = 5000;
const server = express();

// JSON body parser
// allows the petition to get the body of the request in json
server.use(bodyParser.json());

// ?? Don´t understand this much
server.use(jsonResponseMiddleware);

// Logger
// Gives info on console about the tipe of petition made
// get, post, put,... ;
// body of request; url; etc
server.use(loggerMiddleware);

// Routes
server.use(contentRouter);

server.listen(PORT, () => console.log(`Server running on port 📡 ${PORT}`));
