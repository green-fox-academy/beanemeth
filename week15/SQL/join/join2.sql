--Find the list of all buildings that have employees ✓
--Ditinct a duplikaltakat kihagyja
SELECT DISTINCT building FROM employees;

--Find the list of all buildings and their capacity 
SELECT * FROM buildings;


--List all buildings and the distinct employee roles in each building (including empty buildings) 
SELECT DISTINCT building_name, role 
FROM buildings 
  LEFT JOIN employees
    ON building_name = building;

-- Query Results
-- Building_name	Role
-- 1e	Engineer
-- 1e	Manager
-- 1w	
-- 2e	
-- 2w	Artist
-- 2w	



---------------------------

-- Table: Buildings (Read-Only)
-- Building_name	Capacity
-- 1e	24
-- 1w	32
-- 2e	16
-- 2w	20


-- Table: Employees (Read-Only)
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
-- Manager	Scott K.	1e	9
-- Manager	Shirlee M.	1e	3
-- Manager	Daria O.	2w	6