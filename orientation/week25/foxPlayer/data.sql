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
    path TINYTEXT,
    PRIMARY KEY (id)
    -- FOREIGN KEY (playlist_id) REFERENCES playlists(id), 
);

CREATE TABLE playlists_tracks (
  playlists_id INT NOT NULL,
  tracks_id INT NOT NULL,
  PRIMARY KEY (playlists_id, tracks_id),
  FOREIGN KEY (playlists_id) REFERENCES playlists(id),
  FOREIGN KEY (tracks_id) REFERENCES tracks(id)
);

INSERT INTO playlists (playlist_title, system_rank)
VALUES
    ("Favorites", 1),
    ("Fox rock", 0),
    ("Driving", 0),
    ("Music for programming", 0);


INSERT INTO tracks (title, artist, duration )
VALUES
    ("Novemver rain", "Guns and Roses", 180),
    ("Penny Lane", "The beatles", 190),
    ("Under the Sun", "DIIV", 195),
    ("Lightning Bolt", "Jake Bugg", 190);

INSERT INTO playlists_tracks (playlists_id, tracks_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3);

 --many to many, coz one track can belong to more than one playlist


