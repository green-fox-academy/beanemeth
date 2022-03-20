--Find all the Toy Story movies

SELECT title, director FROM movies 
WHERE title LIKE "Toy Story%";

--Find all the movies directed by John Lasseter

SELECT title, director FROM movies 
WHERE director = 'John Lasseter';

--Find all the movies (and director) not directed by John Lasseter

SELECT title, director FROM movies 
WHERE director not like 'John Lasseter';

SELECT title, director FROM movies 
WHERE director != "John Lasseter";

--Find all the WALL-* movies
SELECT * FROM movies 
WHERE title LIKE "WALL-_";

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