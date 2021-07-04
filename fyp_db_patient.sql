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
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `vc_id` varchar(45) DEFAULT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `father_name` varchar(45) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `qualification` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `date` varchar(45) DEFAULT NULL,
  `dob` varchar(45) NOT NULL,
  `martial_status` varchar(45) NOT NULL,
  `cnic` varchar(45) NOT NULL,
  `religion` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip` varchar(45) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `patientHash` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'vc3','Duaa','Shaikh','fgh','fghj','1234','uiol','34','uiol','ert56y7u','2-5-2020','rtgy','u8i','tyhuj','Islam','khi','tyh','tyu',NULL,NULL),(2,'vc2','Iqra','Naz','dfghg','sdfgb','1234','asdcfv','2345','asdcfvbg','sdfg','2-2-2021','sdfvgb','sdfvbg','sdfgb','asdfg','dsfg','dfgb','asdfg',NULL,NULL),(3,'vc2','Sania','Zehra','dfghg','sdfgb','1234','asdcfv','2345','asdcfvbg','sdfg','2-2-2021','sdfvgb','sdfvbg','sdfgb','asdfg','dsfg','dfgb','asdfg',NULL,NULL),(4,'v2','sadf','sdfg','sdfg','sdfg','1234','swdefr','34564','sdfg','dfg','wsdef','dfvgbhjki','uikmnbv','sdfghjk','dfghyju','undefined','fghjk','serftghjk','publicuploads1625085027071download.jpg',NULL),(5,'v2','sadf','sdfg','sdfg','asdf','1234','swdefr','2345','sdfg','dfg','wsdef','dfvgbhjki','uikmnbv','sdfghjk','dfghyju','undefined','fghjk','serftghjk','publicuploads1625085191150download.jpg',NULL),(6,'v2','sadf','sdfg','sdfg','rgf','1234','swdefr','12345','sdfg','dfg','wsdef','dfvgbhjki','uikmnbv','sdfghjk','dfghyju','undefined','fghjk','serftghjk','1625085288418download.jpg',NULL),(10,'vc5','xcvbn',' sdfgh','zxdfgh','abc@gmail.com','sdfvc','dfvgbn','12345','zxdcfvgb','zxcvb','3-2-2021','cvb','xcvbn','asdfgh','dfgh','sdfgh','sdfgb','hyjmk,',NULL,NULL);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-04 21:18:17
