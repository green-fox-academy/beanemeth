DROP DATABASE IF EXISTS datingApp;
CREATE DATABASE datingApp;
USE datingApp;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

DROP TABLE IF  EXISTS datingApp;  
CREATE TABLE datingApp (
  username VARCHAR(120) UNIQUE NOT NULL,
  nickname VARCHAR(120) NOT NULL,
  birth_year SMALLINT(4) NOT NULL,
  gender ENUM ('Male', 'Female') NOT NULL,
  target_gender ENUM ('Male', 'Female', 'Both') NOT NULL,
  self_description VARCHAR(120),
  profile_picture_url VARCHAR(120) NOT NULL,
  UNIQUE (username),
  PRIMARY KEY (username)
);


DROP TABLE IF  EXISTS likes;  
CREATE TABLE likes (
    id INT AUTO_INCREMENT,
    source_username VARCHAR(120) NOT NULL,
    target_username VARCHAR(120) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (source_username) REFERENCES datingApp(username),
    FOREIGN KEY (target_username) REFERENCES datingApp(username)
);


  
