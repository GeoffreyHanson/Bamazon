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
	VALUES(4,  
);