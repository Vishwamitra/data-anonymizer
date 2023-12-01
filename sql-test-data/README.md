# Data Anonymization API Test Database

It provides a Docker Compose setup for testing your Data Anonymization API tool with a MySQL database containing predefined databases, tables, and sample data.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Navigate to the project directory:

    ```bash
    cd sql-test-data
    ```

3. Start the Docker Compose services:

    ```bash
    docker-compose up --build --force-recreate 
    ```

   This command will download the necessary Docker images and build and spin the MySQL container along with necessary database, tables and records, etc. 

4. Wait for a moment to allow the services to initialize.

5. Access your database using following credentials

## MySQL Database Information

- **Host:** localhost [127.0.0.1]
- **Port:** 3306
- **Username:** root
- **Password:** root_password

### SQL Adminer
You can SQL admin page by clicking the following url
```
http://localhost:8080
```
You can loging and access all the tables and data by providing the above credentials

### Predefined Databases:

1. `testdb`

### Predefined Tables:

- **Table 1:** `customers`
- **Table 2:** `orders` 

## Sample Data

The predefined tables contain sample data for testing purposes.

## Stopping the Services

To stop the services and remove the containers, run:

```bash
docker-compose down