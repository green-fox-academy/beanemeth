DROP DATABASE IF EXISTS datingApp;
CREATE DATABASE datingApp;
USE datingApp;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

DROP TABLE IF  EXISTS datingApp;  
CREATE TABLE datingApp (
  username VARCHAR(120) UNIQUE NOT NULL,
  nickname VARCHAR(120) NOT NULL,
  birth_year SMALLINT(4) NOT NULL,
  GENDER ENUM ('Male', 'Female') NOT NULL,
  target_gender ENUM ('Male', 'Female', 'Both') NOT NULL,
  self_description VARCHAR(120),
  profile_picture_url VARCHAR(120) NOT NULL,
  PRIMARY KEY (username)
);



  


