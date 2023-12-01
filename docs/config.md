# Sample Input JSON Explanation

This document provides an explanation of each field in the sample input JSON used to configure the Data Anonymization API.

## Input JSON Structure

```json
{
  "batch_size": 1000,
  "tables": [
    {
      "table_name": "customers",
      "key": "cust_id",
      "columns": [
        {
          "name": "first_name",
          "type": "person.firstName"
        },
        {
          "name": "last_name",
          "type": "person.lastName"
        }
      ]
    },
    {
      "table_name": "orders",
      "key": "cust_id",
      "columns": [
        {
          "name": "del_street",
          "type": "location.street"
        },
        {
          "name": "del_zip_code",
          "type": "location.zipCode"
        }
      ]
    }
  ]
}
```

## Explanation of Fields

* `batch_size`: Specifies the number of records to process in each batch. In the provided example, the batch size is set to 1000.
* `tables`: An array containing configurations for each table to be anonymized.
* `table_name`: The name of the table in the database.
* `key`: `key is  name of the column based on which you want to run the update command.It can be either primary or foreign key identifier for the table. In the example, "cust_id" is used as the key for both "customers" where it is a primary key while in "orders" table it is a foreign key.
* `columns`: An array specifying the columns within each table to be anonymized.
* `name`: The name of the column to be anonymized.
* `type`: The faker package type used for generating fake data. In the example, various types such as "person.firstName," "person.lastName," "internet.email," etc., are used. `To know all different types of faker types available` <A href="https://fakerjs.dev/api/">refer to this page. </a>