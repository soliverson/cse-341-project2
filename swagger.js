const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Church API',
        description: 'Church API Documentation'
    },
    host: 'cse-341-project2-gbsf.onrender.com',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js', './routes/hymns.js', './routes/gospeltopics.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
