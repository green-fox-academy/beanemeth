--List all directors of Pixar movies (alphabetically), without duplicates 
SELECT DISTINCT director FROM movies
ORDER BY director ASC;
--List the last four Pixar movies released (ordered from most recent to least)
SELECT title, year FROM movies
ORDER BY year DESC
LIMIT 4;
--List the first five Pixar movies sorted alphabetically
SELECT title FROM movies
ORDER BY title ASC
LIMIT 5;
--List the next five Pixar movies sorted alphabetically
SELECT title FROM movies
ORDER BY title ASC
LIMIT 5 OFFSET 5;


-- Table: Movies
-- Id	Title	Director	Year	Length_minutes
-- 1	Toy Story 3	Lee Unkrich	2010	103
-- 2	Ratatouille	Brad Bird	2007	115
-- 3	Brave	Brenda Chapman	2012	102
-- 4	A Bug's Life	John Lasseter	1998	95
-- 5	Toy Story 2	John Lasseter	1999	93
-- 6	Cars	John Lasseter	2006	117
-- 7	Toy Story	John Lasseter	1995	81
-- 8	Cars 2	John Lasseter	2011	120
-- 9	WALL-E	Andrew Stanton	2008	104
-- 10	Monsters University	Dan Scanlon	2013	110