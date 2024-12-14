DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    birthYear VARCHAR(255),
    email VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO Users (firstName, lastName, birthYear, email)
VALUES 
('Tom', 'Erichsen', "2012", "Peter@mail.com"),
('Kenedy', 'Janeka', "2017","Kenedy@mail.com");