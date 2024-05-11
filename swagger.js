const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Church Api',
        description: "Church Api"
    },
    host: 'cse-341-project2-gbsf.onrender.com',
    schemes: ["http", "https"]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);