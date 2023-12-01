const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Anonymizer Backend API',
    description:
      'Documentation automatically generated by the <b>swagger-autogen</b> module.',
  },
  host: 'localhost:5001',
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
  components: {
    schemas: {
      Config: {
        "type": "object",
        "properties": {
          "tables": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "table_name": {
                  "type": "string"
                },
                "primary_key": {
                  "type": "string"
                },
                "foreign_key": {
                  "type": "string"
                },
                "columns": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string"
                      }
                    },
                    "required": []
                  }
                }
              },
              "required": [
                "table_name",
                "foreign_key",
                "columns"
              ]
            }
          }
        },
        "required": [
          "tables"
        ]
      }
    }
  }
};

const outputFile = 'build/swagger.json';
const endpointsFiles = ['src/app.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);
