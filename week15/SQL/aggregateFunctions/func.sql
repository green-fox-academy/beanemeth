--Find the longest time that an employee has been at the studio ✓
SELECT MAX(Years_employed) FROM employees;
-- For each role, find the average number of years employed by employees in that role

--For each role, find the average number of years employed by employees in that role
SELECT role, AVG(years_employed) as Average_years_employed
FROM employees
GROUP BY role;
--itt azert kell az as average_years_employed, mert igy nevezi el majd az uj tablaban, hogy ne az legyen, hogy avg(years_employed)

--Find the total number of employee years worked in each building
SELECT building, SUM(Years_employed) as YEARS_Employed
FROM employees group by building;


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