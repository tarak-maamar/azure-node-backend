USE TestDB;

CREATE TABLE Users
(
    ID INT PRIMARY KEY,
    Username VARCHAR(50),
    Email VARCHAR(100)
);

INSERT INTO Users
    (ID, Username, Email)
VALUES
    (1, 'user1', 'user1@example.com'),
    (2, 'user2', 'user2@example.com');