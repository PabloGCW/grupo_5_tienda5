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
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'9780393288728R180',1,'Mantas Marcia','Manta de lanilla frisada','Dimensiones: 1,60 mts x 2,10 mts','manta1.jpg',5000.00,10,1,30),(2,'9780393288728R181',2,'Giftbox Classic','Hacé tu regalo ideal con nuestro Giftbox Classic','Incluye vela white, posavelas Coliseo, frasco Ligthmyfire, apagavelas','giftbox1.jpg',2900.00,5,0,NULL),(3,'9780393288728R182',3,'Aromatizante difusor Clover','Para dejar nuestros ambientes perfumados y gradables','250 cc','spray1.jpg',778.00,10,0,NULL),(4,'9780393288728R183',4,'Frascos','Para que puedas almacenar lo que quieras','660 cc','frasco1.jpg',572.17,10,0,NULL),(5,'9780393288728R184',5,'Mate luego existo','Delicado mate para acompañarte o para regalar','Mate de cerámica con la leyenda \"mate o luego existo\"','mate1.jpg',1445.00,10,0,NULL),(6,'9780393288728R185',6,'Individual Monstera','Individual delicado y diferente','Material: fibroplus. Dimensiones: 40 x 30 cm','individual1.jpg',667.00,10,1,20),(7,'9780393288728R186',7,'Fósforos pack por 70','Fósforos para encender tu hormo o estufa, o para sorprender amigos','Fósforos de 7.5 cm. Incluye raspador para encender','cerilla1.jpg',1112.00,700,0,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productscategories`
--

LOCK TABLES `productscategories` WRITE;
/*!40000 ALTER TABLE `productscategories` DISABLE KEYS */;
INSERT INTO `productscategories` VALUES (1,'Textiles'),(2,'Giftbox'),(3,'Aromáticos'),(4,'Frascos'),(5,'Tazas y Mates'),(6,'Posavasos e Individuales'),(7,'Accesorios');
/*!40000 ALTER TABLE `productscategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productsusers`
--

LOCK TABLES `productsusers` WRITE;
/*!40000 ALTER TABLE `productsusers` DISABLE KEYS */;
INSERT INTO `productsusers` VALUES (1,7,1);
/*!40000 ALTER TABLE `productsusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pueyrredon 2409',1,1119,'federicoadespontin@hotmail.com',1149289603,'Federico','Despontin',16365011,'12345678','C:/alguno');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `userscategories`
--

LOCK TABLES `userscategories` WRITE;
/*!40000 ALTER TABLE `userscategories` DISABLE KEYS */;
INSERT INTO `userscategories` VALUES (1,'administrador'),(2,'visitante');
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

-- Dump completed on 2022-07-26 21:13:09
