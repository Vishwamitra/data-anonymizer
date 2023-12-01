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

/** Class for Anonymizing data to make it GDPR compliant */

import { Config, Table } from '../../types/types';
import { Sequelize, QueryTypes, BaseError } from 'sequelize';
import { fakerNL as faker } from '@faker-js/faker';


export default class AnonymizerController {

  private sequelize: Sequelize;

  constructor() {
    this.sequelize = require('../../database/connection');
  }

  private async authenticateSequelize(): Promise<void> {
    try {
      await this.sequelize.authenticate();
    } catch (error) {
      console.log(error)
    }
  }

  private async processBatch({ table_name, key, columns }: Table, batch_size: number): Promise<void> {

    let offset = 0;
    const keyColumnToUse = key;
    try {
      while (true) {
        const batchQuery = `SELECT DISTINCT(${keyColumnToUse}) FROM ${table_name} LIMIT ${offset}, ${batch_size}`;
        const batchRows = await this.sequelize.query(batchQuery, { type: QueryTypes.SELECT });

        if (batchRows.length === 0) {
          break;
        }

        for (const row of batchRows) {
          const keyValue = (row as any)[keyColumnToUse];
          const caseStatements = columns.map((column: any) => `${column.name} = '${faker.helpers.fake(`{{${column.type}}}'`)}`);
          const updateQuery = `UPDATE ${table_name} SET ${caseStatements.join(', ')} WHERE ${key} = '${keyValue}'`;

          await this.sequelize.query(updateQuery, { type: QueryTypes.UPDATE });
        }
        offset += batch_size
      }
    } catch (error: any) {
      console.log(`Failed to process batch for ${table_name}: ${error.message}`);
    }
  }

  async updateTable(req: Config) {
    try {
      await this.authenticateSequelize();
      const tables: Table[] = req.tables;
      const batchSize: number = req.batch_size
      for (const table of tables) {
        await this.processBatch(table, batchSize);
      }
      return ({'message': 'Update successful'});
    } catch (error: any) {
      if (error instanceof BaseError) {
        return (`{'message':${error.message}}`);
      }
      return ({'message:': 'An unexpected error occurred.' });
    }
  }
}
