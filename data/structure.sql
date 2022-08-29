CREATE DATABASE  IF NOT EXISTS `tienda5db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `tienda5db`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tienda5db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `sku` varchar(25) NOT NULL,
  `productCategoryId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `feature` text DEFAULT NULL,
  `image` varchar(45) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `offer` tinyint(4) DEFAULT NULL,
  `discount` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Products_productCategoryId_foreign` (`productCategoryId`),
  CONSTRAINT `Products_productCategoryId_foreign` FOREIGN KEY (`productCategoryId`) REFERENCES `productscategories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productscategories`
--

DROP TABLE IF EXISTS `productscategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productscategories` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productscategories`
--

LOCK TABLES `productscategories` WRITE;
/*!40000 ALTER TABLE `productscategories` DISABLE KEYS */;
/*!40000 ALTER TABLE `productscategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productsusers`
--

DROP TABLE IF EXISTS `productsusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productsusers` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Products_productId_foreign` (`productId`),
  KEY `Users_userId_foreign` (`userId`),
  CONSTRAINT `Products_productId_foreign` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `Users_userId_foreign` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productsusers`
--

LOCK TABLES `productsusers` WRITE;
/*!40000 ALTER TABLE `productsusers` DISABLE KEYS */;
/*!40000 ALTER TABLE `productsusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `address` varchar(100) NOT NULL,
  `userCategoryId` int(11) NOT NULL,
  `cp` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `dni` int(11) NOT NULL,
  `password` varchar(200) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Users_userCategoryId_foreign` (`userCategoryId`),
  CONSTRAINT `Users_userCategoryId_foreign` FOREIGN KEY (`userCategoryId`) REFERENCES `userscategories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userscategories`
--

DROP TABLE IF EXISTS `userscategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userscategories` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `userType` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userscategories`
--

LOCK TABLES `userscategories` WRITE;
/*!40000 ALTER TABLE `userscategories` DISABLE KEYS */;
/*!40000 ALTER TABLE `userscategories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-26 20:51:19
