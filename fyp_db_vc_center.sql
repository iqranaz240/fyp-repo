-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fyp_db
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `vc_center`
--

DROP TABLE IF EXISTS `vc_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vc_center` (
  `vc_id` int NOT NULL AUTO_INCREMENT,
  `admin_id` varchar(45) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `phone` int DEFAULT NULL,
  `reg_no` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip` int NOT NULL,
  PRIMARY KEY (`vc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vc_center`
--

LOCK TABLES `vc_center` WRITE;
/*!40000 ALTER TABLE `vc_center` DISABLE KEYS */;
INSERT INTO `vc_center` VALUES (1,'1001','asdf','dfg','1234','cvb',1234,'12','sdfg','def',23),(2,'1001','asd','sdf','1234','xcv',123456,'13','sdf','sdfg',234),(5,'1001',' abc','abc@gmail.com','1234','zxcv',12345,'3','swdefr','sdfgb',123),(6,'fd','dfg','sdfg','1234','dcfvb',123,'23','sdf','sdf',2345),(16,'',' abc','abc@gmail.com','123','dfvgbn',23456,'2','xcdfvgg','sdfrgthy',23),(17,'',' abc','abc@gmail.com','1234','dfgh',2345,'34','sdfgh','sdfgb',24),(18,'',' abc','abc@gmail.com','1234','dfg',12345,'123','swdefr','sdfg',34),(20,'',' abc','abc@gmail.com','123','wdfgh',12345,'32','xcdfvgg','sdfrgthy',321),(23,'',' abc','abc@gmail.com','1234','fghnj',12345,'2','swdefr','sdfgb',123);
/*!40000 ALTER TABLE `vc_center` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-20 12:39:46
