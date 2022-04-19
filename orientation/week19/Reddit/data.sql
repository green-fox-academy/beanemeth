CREATE DATABASE IF NOT EXISTS reddit;
USE reddit;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

DROP TABLE IF  EXISTS REDDIT;
  CREATE TABLE reddit (
  id           INT AUTO_INCREMENT,
  title        VARCHAR(100) NOT NULL,
  url           VARCHAR(250) NOT NULL,
  timestamp     BIGINT,
  score         INT DEFAULT 0,
  PRIMARY KEY (id)
);

INSERT INTO reddit (title, url, timestamp)
VALUES
    ("Whatever text", 'https://stackoverflow.com/', 1649403245),
    ("Random text", 'https://github.com/', 1649403987),
    ("Anything text", 'https://www.unixtimestamp.com//', 1649407632),
    ("And more text", 'https://www.kolly.hu/', 1649400637);
  
