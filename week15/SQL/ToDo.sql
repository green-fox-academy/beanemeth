create database IF NOT EXISTS todo;
use todo;

CREATE TABLE IF NOT EXISTS User (
  id   INT AUTO_INCREMENT,
  username VARCHAR(120) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (username)
);

CREATE TABLE IF NOT EXISTS ToDo (
  id     INT AUTO_INCREMENT,
  name   VARCHAR(30) NOT NULL,
  is_done    BOOLEAN DEFAULT false,
  user_id      INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES User(id)
  
);

INSERT INTO User (username)
VALUES
    ('jozsi201'),
    ('marikaneni861'),
    ('feribacsi451');

INSERT INTO ToDo (name, is_done, user_id)
VALUES
    ('Walk the dog', false,1),
    ('Buy milk', false,2),
    ('Do homework', false, 1);





