--Find the movie with a row id of 6
SELECT id, title FROM movies 
WHERE id = 6;
--Find the movies released in the years between 2000 and 2010
SELECT title, year FROM movies
WHERE year BETWEEN 2000 AND 2010;
--Find the movies not released in the years between 2000 and 2010
SELECT title, year FROM movies
WHERE year < 2000 OR year > 2010;
--Find the first 5 Pixar movies and their release year
SELECT title, year FROM movies
WHERE year <= 2003;



-- Table: Movies
-- Id	Title	Director	Year	Length_minutes
-- 1	Toy Story	John Lasseter	1995	81
-- 2	A Bug's Life	John Lasseter	1998	95
-- 3	Toy Story 2	John Lasseter	1999	93
-- 4	Monsters, Inc.	Pete Docter	2001	92
-- 5	Finding Nemo	Andrew Stanton	2003	107
-- 6	The Incredibles	Brad Bird	2004	116
-- 7	Cars	John Lasseter	2006	117
-- 8	Ratatouille	Brad Bird	2007	115
-- 9	WALL-E	Andrew Stanton	2008	104
-- 10	Up	Pete Docter	2009	101