DROP DATABASE IF EXISTS foxPlayer;
CREATE DATABASE foxPlayer;
USE foxPlayer;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

DROP TABLE IF  EXISTS playlists;  
CREATE TABLE playlists (
  id   INT AUTO_INCREMENT,
  playlist_title TINYTEXT NOT NULL,
  system_rank TINYINT(1) DEFAULT 0,
  PRIMARY KEY (id)
);

DROP TABLE IF  EXISTS tracks;  
CREATE TABLE tracks (
    id INT AUTO_INCREMENT,
    title VARCHAR(120) NOT NULL,
    artist VARCHAR(120) NOT NULL,
    duration INT,
    path TINYTEXT NOT NULL,
    playlist_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (playlist_id) REFERENCES playlists(id), 
);


INSERT INTO playlists (playlist_title, system_rank)
VALUES
    ("Favorites", 1),
    ("Fox house", 0),
    ("Driving", 0),
    ("Music for programming", 0);
  




