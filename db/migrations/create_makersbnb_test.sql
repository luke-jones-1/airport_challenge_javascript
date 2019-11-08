CREATE DATABASE "makersbnb_test";

CREATE TABLE listings(id SERIAL PRIMARY KEY, name TEXT, cost decimal (18 ,2), address TEXT, description TEXT);

CREATE TABLE users(id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT, email TEXT, password TEXT);
