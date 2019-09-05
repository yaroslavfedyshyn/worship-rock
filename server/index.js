const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require("body-parser");

const db = require("./db");
const corsOptions = require('./cors');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes);

app.listen(config.port, () => {
    console.info(`Server ${config.env} started at port ${config.port}`);
});