DROP DATABASE IF EXISTS flowershop;
CREATE DATABASE flowershop;
USE flowershop;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

DROP TABLE IF  EXISTS flowers;  
CREATE TABLE flowers (
  id   INT AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  address VARCHAR(120) NOT NULL,
  flowerType VARCHAR(120) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO flowers (name, address, flowerType)
VALUES
    ('Pista bacsi','Budapest Macska u 20.','Jasmine'),
    ('Mari neni','Miskolc, Kutya u 8.','Sunflower');
  

