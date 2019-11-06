# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT  productname, categoryname
FROM products as p
join categories as c
on p.categoryid = c.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT orderid, shippername 
FROM orders as o
join shippers as s
on o.shipperid = s.shipperid
where o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT orderid, productname, quantity 
FROM OrderDetails as od
join products as p
on p.productid = od.productid
where orderid = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT orderid, e.lastname as EmployeeLastName, c.customername 
FROM Orders as o
join customers as c
on c.customerid = o.customerid
join employees as e
on e.employeeid = o.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT count(c.categoryname) as Count, CategoryName
FROM Products as p
join categories as c
on p.categoryid = c.categoryid
group by p.categoryid

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
SELECT od.orderid,  count(p.productid) as ItemCount
FROM OrderDetails as od
join products as p
on p.productid = od.productid
join orders as o
on o.orderid = od.orderid
group by od.orderid 
<!-- Not absolutely certain about this result -->
