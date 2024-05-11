const express = require ('express');
const app = express();

const port = process.eventNames.PORT || 3001;

app.use('/', require('./routes'));

app.listen(port, () => {console.log(`Running on port ${port}`)});
