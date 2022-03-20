--Find the number of movies each director has directed ✓

SELECT director, COUNT(id) as Num_movies_directed
FROM movies
GROUP BY director;

--Find the total domestic and international sales that can be attributed to each director

SELECT director, SUM(domestic_sales + international_sales) as Cumulative_sales_from_all_movies
FROM movies
    INNER JOIN boxoffice
        ON movies.id = boxoffice.movie_id
GROUP BY director;

-- Table: Movies (Read-Only)
-- Id	Title	Director	Year	Length_minutes
-- 1	Toy Story	John Lasseter	1995	81
-- 2	A Bug's Life	John Lasseter	1998	95
-- 3	Toy Story 2	John Lasseter	1999	93
-- 4	Monsters, Inc.	Pete Docter	2001	92
-- 5	Finding Nemo	Andrew Stanton	2003	107
-- 6	The Incredibles	Brad Bird	2004	116
-- 7	Cars	John Lasseter	2006	

-- Table: Boxoffice (Read-Only)
-- Movie_id	Rating	Domestic_sales	International_sales
-- 5	8.2	380843261	555900000
-- 14	7.4	268492764	475066843
-- 8	8	206445654	417277164
-- 12	6.4	191452396	368400000
-- 3	7.9	245852179	239163000
-- 6	8	261441092	370001000