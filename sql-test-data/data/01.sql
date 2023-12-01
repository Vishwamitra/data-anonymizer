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

CREATE DATABASE testdb;
USE testdb;
CREATE TABLE testdb.customers (
    cust_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(15)
);
CREATE TABLE testdb.orders (
  order_id INT PRIMARY KEY,
  cust_id INT NOT NULL,
  order_date DATE NOT NULL,
  order_total DECIMAL(10,2) NOT NULL,
  del_street VARCHAR(255) NOT NULL,
  del_no VARCHAR(255) NOT NULL,
  del_city VARCHAR(255) NOT NULL,
  del_zip_code VARCHAR(255) NOT NULL, -- Added comma here
  FOREIGN KEY (cust_id) REFERENCES customers(cust_id)
);
INSERT INTO testdb.customers (cust_id, first_name, last_name, email, phone)
VALUES 
(1,'FNAME1', 'LNAME1', 'Email@1.com', '1111111'),
(2,'FNAME2', 'LNAME2', 'Email@2.com', '2222222'),
(3,'FNAME3', 'LNAME3', 'Email@3.com', '3333333'),
(4,'FNAME4', 'LNAME4', 'Email@4.com', '4444444'),
(5,'FNAME5', 'LNAME5', 'Email@5.com', '5555555'),
(6,'FNAME6', 'LNAME6', 'Email@6.com', '6666666'),
(7,'FNAME7', 'LNAME7', 'Email@7.com', '7777777'),
(8,'FNAME8', 'LNAME8', 'Email@8.com', '8888888'),
(9,'FNAME9', 'LNAME9', 'Email@9.com', '9999999'),
(10,'FNAME10', 'LNAME10', 'Email@10.com', '10101010')
;
INSERT INTO testdb.orders (order_id, cust_id, order_date, order_total, del_street, del_no, del_city, del_zip_code)
VALUES 
(1, 1, '2023-11-30', 100.00, 'street1', '1', 'city1', 'ABC1'),
(2, 1, '2023-11-30', 150.00, 'street1', '1', 'city1', 'ABC1'),
(3, 2, '2022-11-30', 300.00, 'street2', '2', 'city2', 'ABC2'),
(4, 3, '2021-11-30', 400.00, 'street3', '3', 'city3', 'ABC3');
