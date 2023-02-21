require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/sequelize');

const healthRouter = require("./routes/healthRouter");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

function errorHandler(err, req, res) {
    console.error(err.stack);
    res.status(500).send('Server error');
}

app.use('/api/v1/health', healthRouter);
app.use(errorHandler);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database established successfully');
        app.listen(port, async () => {
            console.log(`Server has successfully started on port ${port}`);
            await sequelize.sync();
        });
    } catch (err) {
        console.error(`Error on server startup: ${err.message}`);
    }
})();
