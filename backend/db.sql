CREATE DATABASE clothes_shop;

CREATE TABLE roles (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    role VARCHAR(25) NOT NULL
);
INSERT INTO roles (role) values ('администратор'), ('пользователь');

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    balance NUMERIC(9,2) DEFAULT 0.00,
    rolesId INTEGER  NOT NULL DEFAULT 2,
    FOREIGN KEY (rolesId) REFERENCES roles (id) ON DELETE CASCADE
);
CREATE TABLE products (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(30) NOT NULL,
    family VARCHAR(40) NOT NULL,
    promo TEXT NOT NULL,
    price NUMERIC(9,2) NOT NULL
);
CREATE TABLE basket (
    userId INTEGER NOT NULL,
    productsId INTEGER NOT NULL,
    PRIMARY KEY(userId, productsId),
    FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (productsId) REFERENCES products (id) ON DELETE CASCADE
);
CREATE TABLE liked (
    userId INTEGER NOT NULL,
    productsId INTEGER NOT NULL,
    PRIMARY KEY(userId, productsId),
    FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (productsId) REFERENCES products (id) ON DELETE CASCADE
);

psql \! chcp 1251
set client_encoding='win1251';
