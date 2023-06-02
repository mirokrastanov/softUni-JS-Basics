const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const handlebarsConfigurator = require('./config/handlebarsConfigurator');
const dbConnect = require('./config/dvConfig');
const routes = require('./routes');

const app = express();
const PORT = 5000;

expressConfigurator(app);
handlebarsConfigurator(app);

dbConnect()
    .then(() => console.log('DB Connected successfully!'))
    .catch(err => console.log('DB Error', err))

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
