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
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `estado` varchar(15) DEFAULT 'pendiente',
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (5,'user1','2023-11-13 21:44:28','entregado'),(6,'user1','2023-11-13 21:45:34','pendiente'),(7,'user1','2023-11-13 21:57:16','pendiente'),(8,'josu','2023-11-13 22:04:24','pendiente'),(9,'user1','2023-11-14 17:20:33','pendiente'),(10,'user1','2023-11-14 17:22:39','pendiente'),(11,'user1','2023-12-11 17:21:43','pendiente'),(12,'user1','2023-12-11 22:38:50','pendiente'),(13,'user1','2023-12-11 22:50:38','pendiente'),(14,'user1','2023-12-12 17:38:39','pendiente'),(15,'user1','2023-12-18 16:18:45','pendiente'),(16,'user1','2023-12-18 18:53:21','pendiente'),(17,'user1','2023-12-18 19:53:43','pendiente'),(18,'user1','2023-12-18 19:59:37','pendiente'),(19,'user1','2023-12-18 20:00:42','pendiente'),(20,'user1','2023-12-18 20:01:35','pendiente'),(21,'user1','2023-12-18 20:06:09','pendiente'),(22,'user1','2023-12-18 20:16:49','pendiente'),(23,'user1','2023-12-18 20:33:40','pendiente'),(24,'user1','2023-12-18 20:34:26','pendiente'),(25,'user1','2023-12-18 20:34:34','pendiente'),(26,'user1','2023-12-18 20:34:40','pendiente'),(27,'user1','2023-12-18 20:42:00','pendiente'),(28,'usercris','2023-12-18 20:44:51','pendiente');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
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
