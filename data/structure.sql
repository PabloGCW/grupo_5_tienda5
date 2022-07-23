-- Table structure for table `tienda5`
--


CREATE DATABASE tienda5Db;
USE tienda5Db;


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
 `usersType` varchar(45) NOT NULL ,

PRIMARY KEY (`id`)
);


-- ************************************** `Products`

CREATE TABLE `Products`
(
 `id`                  int NOT NULL ,
 `sku`                 varchar(25) NOT NULL ,
 `productsCategoryId` int NOT NULL ,
 `name`                varchar(100) NOT NULL ,
 `description`         varchar(250) NULL ,
 `features`            text NULL ,
 `image`               varchar(45) NOT NULL ,
 `price`               decimal(8,2) NOT NULL ,
 `stock`               int NOT NULL ,
 `offer`               tinyint NULL ,
 `discount`            tinyint NULL ,

PRIMARY KEY (`id`),
KEY `products_productsCategoryId_foreign` (`ProductsCategoryId`),
CONSTRAINT `products_productsCategoryId_foreign` FOREIGN KEY (`productsCategoryId`) REFERENCES `productscategories` (`id`)

);

CREATE TABLE `Users`
(
 `id`                 int NOT NULL ,
 `address`            varchar(100) NOT NULL ,
 `usersCategoriesId` int NOT NULL ,
 `cp`                 int NOT NULL ,
 `email`              varchar(50) NOT NULL ,
 `mobile`             int NULL ,
 `name`               varchar(100) NOT NULL ,
 `lastname`           varchar(45) NOT NULL ,
 `dni`                int NOT NULL ,
 `password`           varchar(200) NOT NULL ,
 `avatar`             varchar(50) NULL ,

PRIMARY KEY (`id`),
KEY `products_usersCategoriesId_foreign` (`usersCategoriesId`),
CONSTRAINT `products_usersCategoriesId_foreign` FOREIGN KEY (`usersCategoriesId`) REFERENCES `userscategories` (`id`)

);

-- ************************************** `Products_Users`

CREATE TABLE `ProductsUsers`
(
 `id`          int NOT NULL ,
 `productsId` int NOT NULL ,
 `usersId`    int NOT NULL ,
 `quantity`        int NOT NULL ,
 `dateSold`        date NOT NULL ,

PRIMARY KEY (`id`),
KEY `products_productsId_foreign` (`productsId`),
CONSTRAINT `products_productsId_foreign` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`),
KEY `products_usersId_foreign` (`usersId`),
CONSTRAINT `products_usersId_foreign` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`)
);

