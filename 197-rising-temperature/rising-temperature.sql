-- select b.id as id
-- from weather a
-- inner join  weather b
-- on DATEDIFF(a.recordDate,b.recordDate) = -1
-- and a.temperature < b.temperature;

SELECT B.ID AS ID
FROM WEATHER A
INNER JOIN WEATHER B 
ON DATEDIFF(A.RECORDDATE,B.RECORDDATE) = -1
AND A.TEMPERATURE < B.TEMPERATURE;
