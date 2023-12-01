# Use an official MySQL image as the base image
FROM mysql:latest

# Set the environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

# Copy SQL scripts to a temporary directory
COPY *.sql /docker-entrypoint-initdb-scripts/

# Custom entrypoint script
COPY entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose the MySQL port
EXPOSE 3306

# Use the custom entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
