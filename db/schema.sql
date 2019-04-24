###
Schema

CREATE DATABASE greenups_db;

USE greenups_db;

CREATE TABLE events
(
    id INT NOT NULL
    AUTO_INCREMENT,
	event_name VARCHAR
    (255) NOT NULL,
    event_date_time DATETIME NOT NULL,
    event_location VARCHAR
    (255) NOT NULL,
    event_created_by VARCHAR
    (255) NOT NULL,
    number_of_participants INT
    (10)
	PRIMARY KEY
    (id),
    FOREIGN KEY
    (category_id) REFERENCES categories
    (category_id)
);

    CREATE TABLE categories
    (
        category_id INT NOT NULL
        AUTO_INCREMENT,
	category_name VARCHAR
        (255) NOT NULL
);