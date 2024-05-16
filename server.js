const express = require('express');
const gospeltopicsController = require('controllers\gospeltopics.js');
const hymnsController = require('controllers\hymns.js');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.get('/gospeltopics', gospeltopicsController.getAll);
app.get('/gospeltopics/:id', gospeltopicsController.getSingle);
app.post('/gospeltopics', gospeltopicsController.gospeltopicValidation, gospeltopicsController.createGospeltopic);
app.put('/gospeltopics/:id', gospeltopicsController.gospeltopicValidation, gospeltopicsController.updateGospeltopic);
app.delete('/gospeltopics/:id', gospeltopicsController.deleteGospeltopic);

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Database is connected and server is running on port ${port}`);
        });
    }
});
