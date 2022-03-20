--Find the number of Artists in the studio (without a HAVING clause)
SELECT role, COUNT(*) as Number_of_artists
FROM employees
WHERE role = "Artist";


--Find the number of Employees of each role in the studio
SELECT role, COUNT(*) as count
FROM employees
GROUP BY role;

--Find the total number of years employed by all Engineers ✓

SELECT role, SUM(years_employed)
FROM employees
GROUP BY role
HAVING role = "Engineer";

-- Table: Employees
-- Role	Name	Building	Years_employed
-- Engineer	Becky A.	1e	4
-- Engineer	Dan B.	1e	2
-- Engineer	Sharon F.	1e	6
-- Engineer	Dan M.	1e	4
-- Engineer	Malcom S.	1e	1
-- Artist	Tylar S.	2w	2
-- Artist	Sherman D.	2w	8
-- Artist	Jakob J.	2w	6
-- Artist	Lillia A.	2w	7
-- Artist	Brandon J.	2w	7