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

import app from './app';

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(
      `⚡️[server]: Server is running at ${process.env.REACT_APP_SERVER_URI}:${process.env.REACT_APP_SERVER_PORT}\n📖[Documentation]: Backend Documentation at ${process.env.REACT_APP_SERVER_URI}:${process.env.REACT_APP_SERVER_PORT}/docs `
    );
  } else {
    console.log('⚡️[server]: Anonymizer Backend server has started');
  }
});
