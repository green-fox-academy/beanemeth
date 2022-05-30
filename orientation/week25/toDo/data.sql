DROP DATABASE IF EXISTS toDo;
CREATE DATABASE toDo;
USE toDo;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

DROP TABLE IF  EXISTS todos;  
CREATE TABLE todos (
  id   INT AUTO_INCREMENT,
  text VARCHAR(120) NOT NULL,
  completed boolean DEFAULT false,
  destroyed boolean DEFAULT false,
  PRIMARY KEY (id)
);

INSERT INTO todos (text)
VALUES
    ("Buy tickets to DIIV"),
    ("Pass the exam"),
    ("Eat a burger"),
    ("Sleep");
