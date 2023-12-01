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


const Sequelize = require('sequelize');
const DATABASE_NAME = process.env.REACT_APP_DATABASE_NAME
const DATABASE_USER = process.env.REACT_APP_DATABASE_USER
const DATABASE_PASSWORD = process.env.REACT_APP_DATABASE_PASSWORD
const DATABASE_HOST = process.env.REACT_APP_DATABASE_HOST

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: 'mysql',
});

module.exports = sequelize;