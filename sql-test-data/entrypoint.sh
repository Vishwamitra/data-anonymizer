#!/bin/bash
set -e

# Start MySQL server in the background
/docker-entrypoint.sh mysqld &

# Wait for MySQL to start
until mysqladmin ping -hlocalhost -uroot -proot_password; do
  echo "Waiting for MySQL to start..."
  sleep 1
done

# Run SQL scripts
for script in /docker-entrypoint-initdb-scripts/*.sql; do
  echo "Running script: $script"
  mysql -hlocalhost -uroot -proot_password < "$script"
done

# Keep the container running
tail -f /dev/null
