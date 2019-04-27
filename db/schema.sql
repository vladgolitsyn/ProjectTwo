DROP DATABASE IF EXISTS greenups_db;
CREATE DATABASE greenups_db;

USE greenups_db;

-- CREATE TABLE categories
-- (
--     category_id INT
--     AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     category_name VARCHAR
--     (255) NOT NULL
-- )
-- ENGINE=INNODB;

--     CREATE TABLE events
--     (
--         id INT NOT NULL
--         AUTO_INCREMENT,
-- 	event_name VARCHAR
--         (255) NOT NULL,
--     event_date_time DATETIME NOT NULL,
--     event_location VARCHAR
--         (255) NOT NULL,
--     event_created_by VARCHAR
--         (255) NOT NULL,
--     number_of_participants INT
--         (10),
-- 	PRIMARY KEY
--         (id),
--     cat_id INT NOT NULL,
--     FOREIGN KEY
--     FK_CAT
--         (cat_id) REFERENCES categories
--         (category_id)
--     ON
--         UPDATE CASCADE
--    ON
--         DELETE RESTRICT
-- ) ENGINE=INNODB;

