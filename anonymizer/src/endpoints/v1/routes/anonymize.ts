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

/** Routes for all endpoints related to Google Cloud Workflows */

import express from 'express';
import AnonymizerController from '../../../controllers/v1/anonymize';
import {Config} from '../../../types/types';

const v1_anonymize_routes = express.Router();

// TO DO - Skeleton
v1_anonymize_routes.post('/updateData/:tableName', async (req, res) => {
  //  #swagger.tags=['Update Tables']
  try {
    const controller = new AnonymizerController();
    const response = await controller.updateTable(req);
    return res.send(response);
  } catch (errors) {
    res.send({errors});
  }
});

export default v1_anonymize_routes;
