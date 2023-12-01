/**
Data Anonymizer - Open Source Data Anonymization Tool

Copyright (c) 2023 - Vishwamitra Mishra

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import express, {Application} from 'express';
import router from './endpoints/routes';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
const cors = require('cors');

const app: Application = express();

// Swagger documentation is available only when it is non production env
if (process.env.NODE_ENV !== 'production') {
  const swaggerDocument = require('../build/swagger.json');
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
  })
);
app.use(bodyParser.json());
app.use(router);

export default app;
