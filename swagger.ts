const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Anonymizer Backend API',
    description:
      'Documentation automatically generated by the <b>swagger-autogen</b> module.',
  },
  host: 'localhost:5000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Data Anonymizer APIs',
      description:
        'These endpoints are used to anonymize personal data across databases and tables based on provided config json file.',
    },
  ],
};

const outputFile = 'build/swagger.json';
const endpointsFiles = ['src/app.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);