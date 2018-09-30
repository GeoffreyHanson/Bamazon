DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    ID INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price INT DEFAULT 0,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (ID)
);

INSERT INTO products (
	VALUES(1, "Sock", "Apparel", 5, 50),
	VALUES(2, "Magical lamp", "General wares", 1000, 1),
	VALUES(3, "A dirty sock", "Apparel", 1, 1000),
	VALUES(4, "Chicken", "Food", 10, 10),
    VALUES(5, "Pillows", "General wares", 20, 5),
    VALUES(6, "Box of waffles", "Food", 5, 20),
    VALUES(7, "Single waffle", "Food", 1, 50),
    VALUES(8, "Broom", "General wares", 7, 4),
    VALUES(9, "Mugs", "Kitchen wares", 2, 15),
    VALUES(10, "Dongles", "Electronics", 1, 143), 
);