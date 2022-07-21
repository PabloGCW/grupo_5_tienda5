-- Table structure for table `tienda5`
--


CREATE DATABASE tienda5_db;
USE tienda5_db;


-- ************************************** `ProductsCategories`

CREATE TABLE `ProductsCategories`
(
 `id`   int NOT NULL ,
 `name` varchar(45) NOT NULL ,

PRIMARY KEY (`id`)
);


-- ************************************** `UsersCategories`

CREATE TABLE `UsersCategories`
(
 `id`        int NOT NULL ,
 `UsersType` varchar(45) NOT NULL ,

PRIMARY KEY (`id`)
);


-- ************************************** `Products`

CREATE TABLE `Products`
(
 `id`                  int NOT NULL ,
 `SKU`                 varchar(25) NOT NULL ,
 `ProductsCategory_id` int NOT NULL ,
 `name`                varchar(100) NOT NULL ,
 `description`         varchar(250) NULL ,
 `features`            text NULL ,
 `image`               varchar(45) NOT NULL ,
 `price`               decimal(8,2) NOT NULL ,
 `stock`               int NOT NULL ,
 `offer`               tinyint NULL ,
 `discount`            tinyint NULL ,

PRIMARY KEY (`id`),
KEY `products_ProductsCategory_id_foreign` (`ProductsCategory_id`),
CONSTRAINT `products_ProductsCategory_id_foreign` FOREIGN KEY (`ProductsCategory_id`) REFERENCES `productscategories` (`id`)

);

CREATE TABLE `Users`
(
 `id`                 int NOT NULL ,
 `address`            varchar(100) NOT NULL ,
 `UsersCategories_Id` int NOT NULL ,
 `CP`                 int NOT NULL ,
 `email`              varchar(50) NOT NULL ,
 `mobile`             int NULL ,
 `name`               varchar(100) NOT NULL ,
 `lastname`           varchar(45) NOT NULL ,
 `DNI`                int NOT NULL ,
 `password`           varchar(200) NOT NULL ,
 `avatar`             varchar(50) NULL ,

PRIMARY KEY (`id`),
KEY `products_UsersCategories_id_foreign` (`UsersCategories_Id`),
CONSTRAINT `products_UsersCategories_id_foreign` FOREIGN KEY (`UsersCategories_Id`) REFERENCES `userscategories` (`id`)

);

-- ************************************** `Products_Users`

CREATE TABLE `Products_Users`
(
 `id`          int NOT NULL ,
 `Products_Id` int NOT NULL ,
 `Users_Id`    int NOT NULL ,
 `Cant`        int NOT NULL ,
 `Sold`        date NOT NULL ,

PRIMARY KEY (`id`),
KEY `products_Products_Id_foreign` (`Products_Id`),
CONSTRAINT `products_Products_Id_foreign` FOREIGN KEY (`Products_Id`) REFERENCES `products` (`id`),
KEY `products_Users_Id_foreign` (`Users_Id`),
CONSTRAINT `products_Users_Id_foreign` FOREIGN KEY (`Users_Id`) REFERENCES `users` (`id`)
);

