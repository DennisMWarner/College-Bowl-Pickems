-- USE bpems;

-- CREATE TABLE users (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255),
--     email VARCHAR(255),
--     imgUrl VARCHAR(255),
--     userId VARCHAR(255),
--     INDEX userId (userId), 
-- tieBreaker int NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE picks (
--     id int NOT NULL AUTO_INCREMENT,
--     gameId int, 
--     userId VARCHAR(255) NOT NULL, 
--     teamId int, 
--     points int,
--     INDEX userId (userId), 
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE games (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
-- sponsor VARCHAR(255) NOT NULL,
--     gameDate VARCHAR(255),
--     loc VARCHAR(255),
--     time VARCHAR(12), 
--     network VARCHAR(24),
--    PRIMARY KEY (id),
--    wId int NOT NULL,
--    status VARCHAR(255),
--     INDEX (gameDate)   
-- );

-- ALTER TABLE games 
-- DROP COLUMN points 



-- CREATE TABLE teams (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     abbName VARCHAR(6),
--     priColor VARCHAR(12),
--     secColor VARCHAR(12), 
--     conference VARCHAR(7), 
--     confRecord VARCHAR(5),
--     overallRec VARCHAR(5),
--     mascotName VARCHAR(24), 
--     streak VARCHAR(255),
--     gameId int(11),
--rank VARCHAR(4), 
--    PRIMARY KEY (id),
--     INDEX (id)   
-- );

-- ALTER TABLE teams 
-- DROP COLUMN teamUrl

-- ALTER TABLE teams
-- ADD rank VARCHAR(4)



-- -- USE THIS TO CLEAN OUT YOUR DATABASE
-- DROP TABLE IF EXISTS teams;
-- DROP TABLE IF EXISTS picks;

-- DROP TABLE IF EXISTS users;
