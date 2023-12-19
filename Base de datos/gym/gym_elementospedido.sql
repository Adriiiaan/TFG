-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gym
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `elementospedido`
--

DROP TABLE IF EXISTS `elementospedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementospedido` (
  `idElementosPedido` int NOT NULL AUTO_INCREMENT,
  `idPedidoFk` int DEFAULT NULL,
  `idProductoFk` int DEFAULT NULL,
  `unidades` int DEFAULT NULL,
  PRIMARY KEY (`idElementosPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elementospedido`
--

LOCK TABLES `elementospedido` WRITE;
/*!40000 ALTER TABLE `elementospedido` DISABLE KEYS */;
INSERT INTO `elementospedido` VALUES (1,5,2,2),(2,6,7,2),(3,6,8,2),(4,7,3,23),(5,7,12,3),(6,8,8,2),(7,8,6,2),(8,9,2,3),(9,9,9,3),(10,10,2,3),(11,10,9,3),(12,10,1,3),(13,10,12,4),(14,12,4,7),(15,12,2,3),(16,13,9,3),(17,13,5,2),(18,14,2,2),(19,14,10,2),(20,15,5,2),(21,16,1,2),(22,17,9,2),(23,18,5,2),(24,19,2,2),(25,20,3,3),(26,20,4,3),(27,21,1,2),(28,21,1,2),(29,22,1,2),(30,23,5,1),(31,27,1,2),(32,28,11,1);
/*!40000 ALTER TABLE `elementospedido` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-18 22:33:27
