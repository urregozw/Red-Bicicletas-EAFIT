FROM mysql

ENV MYSQL_DATABASE redbicis
ENV MYSQL_USER mysqluser
ENV MYSQL_PASSWORD password123
ENV MYSQL_ROOT_PASSWORD ;lkajsdfh$21423d

COPY schema.sql /docker-entrypoint-initdb.d/

EXPOSE 3306