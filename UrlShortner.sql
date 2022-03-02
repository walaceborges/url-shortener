DROP DATABASE IF EXISTS UrlShortener;

CREATE DATABASE UrlShortener;

USE UrlShortener;

CREATE TABLE url (
    id INT auto_increment,
    original_url VARCHAR(100),
    new_url VARCHAR(100),
    PRIMARY KEY(id)
) ENGINE=INNODB;