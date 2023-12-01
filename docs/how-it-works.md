# How Anonymization works

## Overview

This Data Anonymization application, developed using the React framework with TypeScript, provides a seamless solution for anonymizing sensitive data in your databases. The application exposes an API that accepts a JSON request body, allowing you to define tables and columns to be anonymized. Leveraging the power of the Faker.js library, the API dynamically generates realistic fake data based on specified types, ensuring the confidentiality of your original dataset.

## Anonymization Process

1. **Request Format:**

   Send a POST request to the API with a JSON payload specifying the tables and columns you want to anonymize. To know more about this request json <a href="config.md">read the docs </a>

## Anonymization Process:

The API processes each specified table one by one. For each table, it iterates through every record. For every specified column in a request json, the application uses <a href="https://fakerjs.dev/api/">faker library</a> to generate fake data based on the provided type. 

For instance, if the type is "person.first_name," it will generate a realistic fake first name. read more about all types of faker data here in the documentation. 

# Important
To update the column type in the request json, please refer the faker type from this documentation page --> https://fakerjs.dev/api/ 

