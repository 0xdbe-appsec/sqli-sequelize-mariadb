DROP DATABASE IF EXISTS sqlidb; 
CREATE DATABASE sqlidb;
USE sqlidb;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
   id MEDIUMINT NOT NULL AUTO_INCREMENT,
   name CHAR(30) NOT NULL,
   password CHAR(30) NOT NULL,
   PRIMARY KEY (id)
);

DROP USER IF EXISTS 'sqliapp'@'localhost'; 
CREATE USER 'sqliapp'@'localhost' IDENTIFIED BY 'p4ssw0rd';
GRANT ALL PRIVILEGES ON sqlidb.* TO 'sqliapp'@'localhost';
FLUSH PRIVILEGES; 
