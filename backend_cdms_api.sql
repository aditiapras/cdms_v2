-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 25, 2023 at 04:42 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backend_cdms_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `Cleaning`
--

CREATE TABLE `Cleaning` (
  `cleaning_id` int(11) NOT NULL,
  `id_drum` varchar(20) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `date_cleaning` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Cleaning`
--

INSERT INTO `Cleaning` (`cleaning_id`, `id_drum`, `pic`, `date_cleaning`) VALUES
(4, 'I16P-H21B-05', 'Aditia Prasetian', '2023-09-17 13:57:46'),
(5, 'I13P-H19A-03', 'Aditia Prasetian', '2023-09-18 06:13:56'),
(6, 'I13P-H19A-01', 'Aditia Prasetian', '2023-09-18 06:18:27'),
(7, 'I13P-H19A-02', 'Aditia Prasetian', '2023-09-18 06:19:49'),
(8, 'I13P-H19A-01', 'Aditia Prasetian', '2023-09-18 06:42:02'),
(9, 'I14P-H19A-01', 'Aditia Prasetian', '2023-09-19 03:47:48'),
(10, 'I14P-H19A-02', 'Aditia Prasetian', '2023-09-19 05:00:46'),
(12, 'I13P-H19A-01', 'Aditia Prasetian', '2023-09-22 04:23:57'),
(13, 'I13P-H19A-04', 'Aditia Prasetian', '2023-09-22 06:04:37'),
(14, 'I16L-H30B-20', 'Aditia Prasetian', '2023-09-25 14:02:11'),
(15, 'I16L-H30B-24', 'Aditia Prasetian', '2023-09-25 14:02:23');

-- --------------------------------------------------------

--
-- Table structure for table `Drum`
--

CREATE TABLE `Drum` (
  `id_drum` varchar(20) NOT NULL,
  `rim` int(11) NOT NULL,
  `type` varchar(5) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `building_mc` varchar(10) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `date_naik` datetime DEFAULT NULL,
  `date_turun` datetime DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `phase` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Drum`
--

INSERT INTO `Drum` (`id_drum`, `rim`, `type`, `status`, `building_mc`, `age`, `date_naik`, `date_turun`, `reason`, `phase`) VALUES
('I13P-H19A-01', 13, 'PCR', 'unuse', '', 0, '2023-09-22 04:23:57', '2023-09-22 04:23:57', '', 'Phase 1'),
('I13P-H19A-02', 13, 'PCR', 'use', 'H1101', 0, '2023-09-18 06:34:43', '2023-09-18 06:19:49', '', 'Phase 1'),
('I13P-H19A-03', 13, 'PCR', 'use', 'H1101', 0, '2023-09-18 06:39:20', '2023-09-18 06:13:56', '', 'Phase 1'),
('I13P-H19A-04', 13, 'PCR', 'unuse', '', 0, '2023-09-22 06:04:37', '2023-09-22 06:04:37', '', 'Phase 1'),
('I13P-H19A-05', 13, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I13P-H19A-06', 13, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I13P-H19A-07', 13, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I13P-H19A-08', 13, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I13P-H19B-01', 13, 'PCR', 'unuse', '', 3, '2023-09-13 11:35:08', '2023-09-15 14:08:33', 'Ganti Inch', 'Phase 2'),
('I13P-H19B-02', 13, 'PCR', 'unuse', '', 3, '2023-09-13 11:35:14', '2023-09-15 14:08:56', 'Ganti Inch', 'Phase 2'),
('I13P-H19B-03', 13, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:57', '2023-09-13 11:39:15', 'Bladder Bocor', 'Phase 2'),
('I13P-H19B-04', 13, 'PCR', 'unuse', '', 0, '2023-09-13 11:36:30', '2023-09-13 11:39:20', 'Bladder Bocor', 'Phase 2'),
('I13P-H19B-05', 13, 'PCR', 'unuse', '', 0, '2023-09-06 13:04:08', '2023-09-04 22:55:42', NULL, 'Phase 2'),
('I13P-H19B-06', 13, 'PCR', 'unuse', '', 0, '2023-09-06 13:04:59', '2023-09-05 10:04:53', NULL, 'Phase 2'),
('I14P-H19A-01', 14, 'PCR', 'unuse', '', 0, '2023-09-19 03:47:48', '2023-09-19 03:47:48', '', 'Phase 1'),
('I14P-H19A-02', 14, 'PCR', 'unuse', '', 0, '2023-09-19 05:00:46', '2023-09-19 05:00:46', '', 'Phase 1'),
('I14P-H19A-03', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-04', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-05', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-06', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-07', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-08', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-09', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-10', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-11', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-12', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-13', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-14', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-15', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-16', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-17', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-18', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-19', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-20', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-21', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19A-22', 14, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I14P-H19B-01', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-05 10:11:05', NULL, 'Phase 2'),
('I14P-H19B-02', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-05 10:18:11', NULL, 'Phase 2'),
('I14P-H19B-03', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-04', 14, 'PCR', 'unuse', '', 0, '2023-09-06 13:05:49', '2023-09-05 10:18:31', NULL, 'Phase 2'),
('I14P-H19B-05', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-06', 14, 'PCR', 'unuse', '', 0, '2023-09-06 13:05:33', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-07', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-08', 14, 'PCR', 'unuse', '', 0, '2023-09-06 13:07:47', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-09', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-10', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-11', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-12', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-13', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-14', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-15', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I14P-H19B-16', 14, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15L-H24A-25', 15, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15L-H24A-26', 15, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15L-H24A-27', 15, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15L-H24A-28', 15, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15L-H24B-23', 15, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15L-H24B-24', 15, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15L-H24B-25', 15, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15L-H24B-26', 15, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19A-01', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-02', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-03', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-04', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-05', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-06', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-07', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-08', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-09', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-10', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-11', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-12', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-13', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-14', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-15', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-16', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-17', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-18', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-19', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-20', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-21', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-22', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-23', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19A-24', 15, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I15P-H19B-01', 15, 'PCR', 'unuse', '', 0, '2023-09-06 13:09:22', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-02', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-03', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-04', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-05', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-06', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-07', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-08', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-09', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-10', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-11', 15, 'PCR', 'unuse', '', 0, '2023-09-06 13:11:07', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-12', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-13', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-14', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-15', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-16', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-17', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-18', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-19', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-20', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-21', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I15P-H19B-22', 15, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30A-29', 16, 'LTR', 'unuse', '', 3, '2023-09-22 04:15:10', '2023-09-25 13:58:54', 'Ganti Size', 'Phase 1'),
('I16L-H30A-30', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-31', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-32', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-33', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-34', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30B-19', 16, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30B-20', 16, 'LTR', 'unuse', '', 0, '2023-09-25 14:02:11', '2023-09-25 14:02:11', '', 'Phase 2'),
('I16L-H30B-21', 16, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30B-22', 16, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30B-23', 16, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30B-24', 16, 'LTR', 'unuse', '', 0, '2023-09-25 14:02:23', '2023-09-25 14:02:23', '', 'Phase 2'),
('I16P-H21A-01', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-02', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-03', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-04', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-05', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-06', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-07', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-08', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-09', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-10', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-11', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-12', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-13', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-14', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-15', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-16', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-17', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-18', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-19', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-20', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-21', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-22', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-23', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-24', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-25', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-26', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-27', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21A-28', 16, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16P-H21B-01', 16, 'PCR', 'unuse', '', 12, '2023-09-18 04:08:04', '2023-09-25 13:59:58', 'Cleaning', 'Phase 2'),
('I16P-H21B-02', 16, 'PCR', 'unuse', '', 12, '2023-09-18 04:08:11', '2023-09-25 14:00:04', 'Cleaning', 'Phase 2'),
('I16P-H21B-03', 16, 'PCR', 'use', 'H1601', 5, '2023-09-18 04:08:22', '2023-09-18 03:33:19', 'Bladder Bocor', 'Phase 2'),
('I16P-H21B-04', 16, 'PCR', 'use', 'H1601', 5, '2023-09-18 04:08:30', '2023-09-18 03:33:22', 'Bladder Bocor', 'Phase 2'),
('I16P-H21B-05', 16, 'PCR', 'use', 'H1804', 5, '2023-09-18 04:09:06', '2023-09-18 03:32:33', 'Bladder Bocor', 'Phase 2'),
('I16P-H21B-06', 16, 'PCR', 'use', 'H1804', 5, '2023-09-18 04:09:27', '2023-09-18 03:32:53', 'Bladder Bocor', 'Phase 2'),
('I16P-H21B-07', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-08', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-09', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-10', 16, 'PCR', 'use', 'H1805', 5, '2023-09-18 04:09:52', '2023-09-18 03:32:57', 'Bladder Bocor', 'Phase 2'),
('I16P-H21B-11', 16, 'PCR', 'use', 'H1805', 5, '2023-09-18 04:10:04', '2023-09-18 03:33:01', 'Bladder Bocor', 'Phase 2'),
('I16P-H21B-12', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-13', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-14', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-15', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-16', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-17', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16P-H21B-18', 16, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17L-H30A-17', 17, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17L-H30A-18', 17, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17L-H30A-19', 17, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17L-H30A-20', 17, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17L-H30B-13', 17, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17L-H30B-14', 17, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17L-H30B-15', 17, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17L-H30B-16', 17, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17L-H30B-17', 17, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17L-H30B-18', 17, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21A-01', 17, 'PCR', 'unuse', '', 0, '2023-09-21 05:48:41', '2023-09-21 08:05:18', 'Ganti Size', 'Phase 1'),
('I17P-H21A-02', 17, 'PCR', 'unuse', '', 0, '2023-09-21 05:35:40', '2023-09-21 05:43:57', 'Cleaning', 'Phase 1'),
('I17P-H21A-03', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-04', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-05', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-06', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-07', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-08', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-09', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-10', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-11', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-12', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-13', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-14', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-15', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21A-16', 17, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I17P-H21B-01', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-02', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-03', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-04', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-05', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-06', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-07', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-08', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-09', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-10', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-11', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I17P-H21B-12', 17, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18L-H21A-09', 18, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18L-H21A-10', 18, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18L-H21B-09', 18, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18L-H21B-10', 18, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18L-H21B-11', 18, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18L-H21B-12', 18, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18L-H21B-13', 18, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18L-H21B-14', 18, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18P-H21A-01', 18, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18P-H21A-02', 18, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18P-H21A-03', 18, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18P-H21A-04', 18, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18P-H21A-05', 18, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18P-H21A-06', 18, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18P-H21A-07', 18, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18P-H21A-08', 18, 'PCR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I18P-H21B-01', 18, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18P-H21B-02', 18, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18P-H21B-03', 18, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18P-H21B-04', 18, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18P-H21B-05', 18, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18P-H21B-06', 18, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18P-H21B-07', 18, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I18P-H21B-08', 18, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I19P-H21B-01', 19, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I19P-H21B-02', 19, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I19P-H21B-03', 19, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I19P-H21B-04', 19, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I19P-H21B-05', 19, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I19P-H21B-06', 19, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I20P-H21B-01', 20, 'PCR', 'unuse', '', 0, '2023-09-13 10:02:39', '2023-09-13 11:41:32', 'Cleaning', 'Phase 2'),
('I20P-H21B-02', 20, 'PCR', 'unuse', '', 0, '2023-09-13 10:03:14', '2023-09-13 11:50:50', 'Bladder Bocor', 'Phase 2'),
('I20P-H21B-03', 20, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I20P-H21B-04', 20, 'PCR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2');

-- --------------------------------------------------------

--
-- Table structure for table `History`
--

CREATE TABLE `History` (
  `id` int(11) NOT NULL,
  `id_drum` varchar(20) NOT NULL,
  `building_mc` varchar(10) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `PIC` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `History`
--

INSERT INTO `History` (`id`, `id_drum`, `building_mc`, `age`, `reason`, `PIC`, `date`, `type`) VALUES
(9, 'I13P-H19A-01', 'H1102', 2, 'Cleaning', 'Aditia Prasetian', '2023-09-21 05:47:13', 'Turun'),
(10, 'I13P-H19A-04', 'H1102', 2, 'Cleaning', 'Aditia Prasetian', '2023-09-21 05:48:29', 'Turun'),
(11, 'I17P-H21A-01', 'H1103', 0, '', 'Aditia Prasetian', '2023-09-21 05:48:41', 'Naik'),
(12, 'I13P-H19A-01', 'H1102', 2, '', 'Aditia Prasetian', '2023-09-21 05:49:17', 'Naik'),
(13, 'I13P-H19A-01', 'H1102', 2, 'Ganti Size', 'Aditia Prasetian', '2023-09-21 08:04:56', 'Turun'),
(14, 'I17P-H21A-01', 'H1103', 0, 'Ganti Size', 'Aditia Prasetian', '2023-09-21 08:05:19', 'Turun'),
(15, 'I16L-H30A-29', 'H1305', 0, '-', 'Aditia Prasetian', '2023-09-22 04:15:10', 'Naik'),
(16, 'I16L-H30A-29', 'H1305', 3, 'Ganti Size', 'Aditia Prasetian', '2023-09-25 13:58:54', 'Turun'),
(17, 'I16L-H30B-20', 'H1704', 12, 'Cleaning', 'Aditia Prasetian', '2023-09-25 13:59:07', 'Turun'),
(18, 'I16L-H30B-24', 'H1704', 12, 'Cleaning', 'Aditia Prasetian', '2023-09-25 13:59:14', 'Turun'),
(19, 'I16P-H21B-01', 'H1502', 12, 'Cleaning', 'Aditia Prasetian', '2023-09-25 13:59:58', 'Turun'),
(20, 'I16P-H21B-02', 'H1502', 12, 'Cleaning', 'Aditia Prasetian', '2023-09-25 14:00:04', 'Turun');

-- --------------------------------------------------------

--
-- Table structure for table `Machine`
--

CREATE TABLE `Machine` (
  `building_mc` varchar(10) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `phase` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Machine`
--

INSERT INTO `Machine` (`building_mc`, `status`, `phase`) VALUES
('H1101', 'unuse', 'Phase 1'),
('H1102', 'unuse', 'Phase 1'),
('H1103', 'unuse', 'Phase 1'),
('H1104', 'unuse', 'Phase 1'),
('H1105', 'unuse', 'Phase 1'),
('H1201', 'unuse', 'Phase 1'),
('H1202', 'unuse', 'Phase 1'),
('H1203', 'unuse', 'Phase 1'),
('H1204', 'unuse', 'Phase 1'),
('H1205', 'unuse', 'Phase 1'),
('H1301', 'unuse', 'Phase 1'),
('H1302', 'unuse', 'Phase 1'),
('H1303', 'unuse', 'Phase 1'),
('H1304', 'unuse', 'Phase 1'),
('H1305', 'unuse', 'Phase 1'),
('H1401', 'unuse', 'Phase 1'),
('H1402', 'unuse', 'Phase 1'),
('H1403', 'unuse', 'Phase 1'),
('H1404', 'unuse', 'Phase 1'),
('H1405', 'unuse', 'Phase 1'),
('H1501', 'unuse', 'Phase 2'),
('H1502', 'unuse', 'Phase 2'),
('H1503', 'unuse', 'Phase 2'),
('H1504', 'unuse', 'Phase 2'),
('H1505', 'unuse', 'Phase 2'),
('H1601', 'unuse', 'Phase 2'),
('H1602', 'unuse', 'Phase 2'),
('H1603', 'unuse', 'Phase 2'),
('H1604', 'unuse', 'Phase 2'),
('H1605', 'unuse', 'Phase 2'),
('H1701', 'unuse', 'Phase 2'),
('H1702', 'unuse', 'Phase 2'),
('H1703', 'unuse', 'Phase 2'),
('H1704', 'unuse', 'Phase 2'),
('H1705', 'unuse', 'Phase 2'),
('H1801', 'unuse', 'Phase 2'),
('H1802', 'unuse', 'Phase 2'),
('H1803', 'unuse', 'Phase 2'),
('H1804', 'unuse', 'Phase 2'),
('H1805', 'unuse', 'Phase 2');

-- --------------------------------------------------------

--
-- Table structure for table `Monitoring`
--

CREATE TABLE `Monitoring` (
  `building_mc` varchar(10) NOT NULL,
  `id_left` varchar(20) DEFAULT NULL,
  `id_right` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `phase` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Monitoring`
--

INSERT INTO `Monitoring` (`building_mc`, `id_left`, `id_right`, `status`, `phase`) VALUES
('H1101', 'I13P-H19A-02', 'I13P-H19A-03', 'use', 'Phase 1'),
('H1102', '', '', 'unuse', 'Phase 1'),
('H1103', '', '', 'unuse', 'Phase 1'),
('H1104', '', '', 'unuse', 'Phase 1'),
('H1105', '', '', 'unuse', 'Phase 1'),
('H1201', '', '', 'unuse', 'Phase 1'),
('H1202', '', '', 'unuse', 'Phase 1'),
('H1203', '', '', 'unuse', 'Phase 1'),
('H1204', '', '', 'unuse', 'Phase 1'),
('H1205', '', '', 'unuse', 'Phase 1'),
('H1301', '', '', 'unuse', 'Phase 1'),
('H1302', '', '', 'unuse', 'Phase 1'),
('H1303', '', '', 'unuse', 'Phase 1'),
('H1304', '', '', 'unuse', 'Phase 1'),
('H1305', '', '', 'unuse', 'Phase 1'),
('H1401', '', '', 'unuse', 'Phase 1'),
('H1402', '', '', 'unuse', 'Phase 1'),
('H1403', '', '', 'unuse', 'Phase 1'),
('H1404', '', '', 'unuse', 'Phase 1'),
('H1405', '', '', 'unuse', 'Phase 1'),
('H1501', '', '', 'unuse', 'Phase 2'),
('H1502', '', '', 'unuse', 'Phase 2'),
('H1503', '', '', 'unuse', 'Phase 2'),
('H1504', '', '', 'unuse', 'Phase 2'),
('H1505', '', '', 'unuse', 'Phase 2'),
('H1601', 'I16P-H21B-03', 'I16P-H21B-04', 'use', 'Phase 2'),
('H1602', '', '', 'unuse', 'Phase 2'),
('H1603', '', '', 'unuse', 'Phase 2'),
('H1604', '', '', 'unuse', 'Phase 2'),
('H1605', '', '', 'unuse', 'Phase 2'),
('H1701', '', '', 'unuse', 'Phase 2'),
('H1702', '', '', 'unuse', 'Phase 2'),
('H1703', '', '', 'unuse', 'Phase 2'),
('H1704', '', '', 'unuse', 'Phase 2'),
('H1705', '', '', 'unuse', 'Phase 2'),
('H1801', '', '', 'unuse', 'Phase 2'),
('H1802', '', '', 'unuse', 'Phase 2'),
('H1803', '', '', 'unuse', 'Phase 2'),
('H1804', 'I16P-H21B-05', 'I16P-H21B-06', 'use', 'Phase 2'),
('H1805', 'I16P-H21B-10', 'I16P-H21B-11', 'use', 'Phase 2');

-- --------------------------------------------------------

--
-- Table structure for table `Part`
--

CREATE TABLE `Part` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `cleaning_id` int(11) DEFAULT NULL,
  `change` varchar(10) NOT NULL,
  `qty` int(11) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Part`
--

INSERT INTO `Part` (`id`, `name`, `cleaning_id`, `change`, `qty`, `status`) VALUES
(1, 'Rubber Band', NULL, 'Yes', 2, 'NG'),
(2, 'Spring Finger', NULL, '', 0, ''),
(3, 'Bead Lock', NULL, '', 0, ''),
(4, 'Shoulder Finger', NULL, '', 0, ''),
(5, 'Turn Up Bladder', NULL, '', 0, ''),
(6, 'Check & Valve', NULL, '', 0, ''),
(7, 'Seal O Ring', NULL, '', 0, ''),
(8, 'Bolt Disc', NULL, '', 0, ''),
(9, 'Cylinder Spring', NULL, '', 0, ''),
(10, 'Thread & Screw', NULL, '', 0, ''),
(11, 'Rubber Band', NULL, 'Yes', 3, 'NG'),
(12, 'Spring Finger', NULL, '', 0, ''),
(13, 'Bead Lock', NULL, '', 0, ''),
(14, 'Shoulder Finger', NULL, '', 0, ''),
(15, 'Turn Up Bladder', NULL, '', 0, ''),
(16, 'Check & Valve', NULL, '', 0, ''),
(17, 'Seal O Ring', NULL, '', 0, ''),
(18, 'Bolt Disc', NULL, '', 0, ''),
(19, 'Cylinder Spring', NULL, '', 0, ''),
(20, 'Thread & Screw', NULL, '', 0, ''),
(21, 'Rubber Band', NULL, 'Yes', 2, 'NG'),
(22, 'Spring Finger', NULL, '', 0, ''),
(23, 'Bead Lock', NULL, '', 0, ''),
(24, 'Shoulder Finger', NULL, '', 0, ''),
(25, 'Turn Up Bladder', NULL, '', 0, ''),
(26, 'Check & Valve', NULL, '', 0, ''),
(27, 'Seal O Ring', NULL, '', 0, ''),
(28, 'Bolt Disc', NULL, '', 0, ''),
(29, 'Cylinder Spring', NULL, '', 0, ''),
(30, 'Thread & Screw', NULL, '', 0, ''),
(31, 'Rubber Band', 4, 'No', 0, 'OK'),
(32, 'Spring Finger', 4, 'No', 0, 'OK'),
(33, 'Bead Lock', 4, 'No', 0, 'OK'),
(34, 'Shoulder Finger', 4, 'No', 0, 'OK'),
(35, 'Turn Up Bladder', 4, 'No', 0, 'OK'),
(36, 'Check & Valve', 4, 'No', 0, 'OK'),
(37, 'Seal O Ring', 4, 'No', 0, 'OK'),
(38, 'Bolt Disc', 4, 'No', 0, 'OK'),
(39, 'Cylinder Spring', 4, 'No', 0, 'OK'),
(40, 'Thread & Screw', 4, 'No', 0, 'OK'),
(41, 'Rubber Band', 5, 'Yes', 2, 'NG'),
(42, 'Spring Finger', 5, 'No', 0, 'OK'),
(43, 'Bead Lock', 5, 'No', 0, 'OK'),
(44, 'Shoulder Finger', 5, 'No', 0, 'OK'),
(45, 'Turn Up Bladder', 5, 'No', 0, 'OK'),
(46, 'Check & Valve', 5, 'No', 0, 'OK'),
(47, 'Seal O Ring', 5, 'No', 0, 'OK'),
(48, 'Bolt Disc', 5, 'No', 0, 'OK'),
(49, 'Cylinder Spring', 5, 'No', 0, 'OK'),
(50, 'Thread & Screw', 5, 'No', 0, 'OK'),
(51, 'Rubber Band', 6, 'Yes', 1, 'NG'),
(52, 'Spring Finger', 6, 'Yes', 2, 'NG'),
(53, 'Bead Lock', 6, 'Yes', 10, 'NG'),
(54, 'Shoulder Finger', 6, 'No', 0, 'OK'),
(55, 'Turn Up Bladder', 6, 'Yes', 1, 'NG'),
(56, 'Check & Valve', 6, 'No', 0, 'OK'),
(57, 'Seal O Ring', 6, 'No', 0, 'OK'),
(58, 'Bolt Disc', 6, 'No', 0, 'OK'),
(59, 'Cylinder Spring', 6, 'No', 0, 'OK'),
(60, 'Thread & Screw', 6, 'No', 0, 'OK'),
(61, 'Rubber Band', 7, 'No', 0, 'OK'),
(62, 'Spring Finger', 7, 'No', 0, 'OK'),
(63, 'Bead Lock', 7, 'No', 0, 'OK'),
(64, 'Shoulder Finger', 7, 'No', 0, 'OK'),
(65, 'Turn Up Bladder', 7, 'No', 0, 'OK'),
(66, 'Check & Valve', 7, 'No', 0, 'OK'),
(67, 'Seal O Ring', 7, 'No', 0, 'OK'),
(68, 'Bolt Disc', 7, 'No', 0, 'OK'),
(69, 'Cylinder Spring', 7, 'No', 0, 'OK'),
(70, 'Thread & Screw', 7, 'No', 0, 'OK'),
(71, 'Rubber Band', 8, 'Yes', 1, 'NG'),
(72, 'Spring Finger', 8, 'Yes', 2, 'NG'),
(73, 'Bead Lock', 8, 'Yes', 10, 'NG'),
(74, 'Shoulder Finger', 8, 'No', 0, 'OK'),
(75, 'Turn Up Bladder', 8, 'No', 0, 'OK'),
(76, 'Check & Valve', 8, 'No', 0, 'OK'),
(77, 'Seal O Ring', 8, 'No', 0, 'OK'),
(78, 'Bolt Disc', 8, 'No', 0, 'OK'),
(79, 'Cylinder Spring', 8, 'No', 0, 'OK'),
(80, 'Thread & Screw', 8, 'No', 0, 'OK'),
(81, 'Rubber Band', 9, 'No', 0, 'OK'),
(82, 'Spring Finger', 9, 'No', 0, 'OK'),
(83, 'Bead Lock', 9, 'No', 0, 'OK'),
(84, 'Shoulder Finger', 9, 'No', 0, 'OK'),
(85, 'Turn Up Bladder', 9, 'No', 0, 'OK'),
(86, 'Check & Valve', 9, 'No', 0, 'OK'),
(87, 'Seal O Ring', 9, 'No', 0, 'OK'),
(88, 'Bolt Disc', 9, 'No', 0, 'OK'),
(89, 'Cylinder Spring', 9, 'No', 0, 'OK'),
(90, 'Thread & Screw', 9, 'No', 0, 'OK'),
(91, 'Rubber Band', 10, 'Yes', 3, 'NG'),
(92, 'Spring Finger', 10, 'No', 0, 'OK'),
(93, 'Bead Lock', 10, 'No', 0, 'OK'),
(94, 'Shoulder Finger', 10, 'No', 0, 'OK'),
(95, 'Turn Up Bladder', 10, 'No', 0, 'OK'),
(96, 'Check & Valve', 10, 'No', 0, 'OK'),
(97, 'Seal O Ring', 10, 'No', 0, 'OK'),
(98, 'Bolt Disc', 10, 'No', 0, 'OK'),
(99, 'Cylinder Spring', 10, 'No', 0, 'OK'),
(100, 'Thread & Screw', 10, 'No', 0, 'OK'),
(101, 'Rubber Band', NULL, 'No', 0, 'OK'),
(102, 'Spring Finger', NULL, 'No', 0, 'OK'),
(103, 'Bead Lock', NULL, 'No', 0, 'OK'),
(104, 'Shoulder Finger', NULL, 'No', 0, 'OK'),
(105, 'Turn Up Bladder', NULL, 'Yes', 1, 'NG'),
(106, 'Check & Valve', NULL, 'No', 0, 'OK'),
(107, 'Seal O Ring', NULL, 'No', 0, 'OK'),
(108, 'Bolt Disc', NULL, 'No', 0, 'OK'),
(109, 'Cylinder Spring', NULL, 'No', 0, 'OK'),
(110, 'Thread & Screw', NULL, 'No', 0, 'OK'),
(111, 'Rubber Band', 12, 'No', 0, 'OK'),
(112, 'Spring Finger', 12, 'No', 0, 'OK'),
(113, 'Bead Lock', 12, 'No', 0, 'OK'),
(114, 'Shoulder Finger', 12, 'No', 0, 'OK'),
(115, 'Turn Up Bladder', 12, 'Yes', 1, 'NG'),
(116, 'Check & Valve', 12, 'No', 0, 'OK'),
(117, 'Seal O Ring', 12, 'No', 0, 'OK'),
(118, 'Bolt Disc', 12, 'No', 0, 'OK'),
(119, 'Cylinder Spring', 12, 'No', 0, 'OK'),
(120, 'Thread & Screw', 12, 'No', 0, 'OK'),
(121, 'Rubber Band', 13, 'No', 0, 'OK'),
(122, 'Spring Finger', 13, 'No', 0, 'OK'),
(123, 'Bead Lock', 13, 'No', 0, 'OK'),
(124, 'Shoulder Finger', 13, 'No', 0, 'OK'),
(125, 'Turn Up Bladder', 13, 'No', 0, 'OK'),
(126, 'Check & Valve', 13, 'No', 0, 'OK'),
(127, 'Seal O Ring', 13, 'No', 0, 'OK'),
(128, 'Bolt Disc', 13, 'No', 0, 'OK'),
(129, 'Cylinder Spring', 13, 'No', 0, 'OK'),
(130, 'Thread & Screw', 13, 'No', 0, 'OK'),
(131, 'Rubber Band', 14, 'No', 0, 'OK'),
(132, 'Spring Finger', 14, 'No', 0, 'OK'),
(133, 'Bead Lock', 14, 'No', 0, 'OK'),
(134, 'Shoulder Finger', 14, 'No', 0, 'OK'),
(135, 'Turn Up Bladder', 14, 'Yes', 1, 'NG'),
(136, 'Check & Valve', 14, 'No', 0, 'OK'),
(137, 'Seal O Ring', 14, 'No', 0, 'OK'),
(138, 'Bolt Disc', 14, 'No', 0, 'OK'),
(139, 'Cylinder Spring', 14, 'No', 0, 'OK'),
(140, 'Thread & Screw', 14, 'No', 0, 'OK'),
(141, 'Rubber Band', 15, 'No', 0, 'OK'),
(142, 'Spring Finger', 15, 'No', 0, 'OK'),
(143, 'Bead Lock', 15, 'No', 0, 'OK'),
(144, 'Shoulder Finger', 15, 'No', 0, 'OK'),
(145, 'Turn Up Bladder', 15, 'Yes', 1, 'NG'),
(146, 'Check & Valve', 15, 'No', 0, 'OK'),
(147, 'Seal O Ring', 15, 'No', 0, 'OK'),
(148, 'Bolt Disc', 15, 'No', 0, 'OK'),
(149, 'Cylinder Spring', 15, 'No', 0, 'OK'),
(150, 'Thread & Screw', 15, 'No', 0, 'OK');

-- --------------------------------------------------------

--
-- Table structure for table `Tub`
--

CREATE TABLE `Tub` (
  `id` int(11) NOT NULL,
  `tub_width` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Tub`
--

INSERT INTO `Tub` (`id`, `tub_width`) VALUES
(1, 320),
(2, 345),
(3, 360),
(4, 375),
(5, 400),
(6, 420);

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `nik` varchar(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `workgroup` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`nik`, `username`, `password`, `workgroup`) VALUES
('60000011', 'Ahmad Budi Harto', '$2b$10$s7VX/mjHawMHGXmn33O7.u2wNC6U.0yUXbLyOExch5F86A9CFegfy', 'NS'),
('60000186', 'Haryanto', '$2b$10$qCosNSuouo1XNOpa1zKf2.YqwU1zUKUv9QZeNOG3.NIAD8oCq3uIm', 'NS'),
('60001692', 'Agung Supriyadi', '$2b$10$IaJpBLII.28bkbQtxjSVsen6DsjLbrFMJO295b666H3e2Cbiq9kOm', 'NS'),
('61600540', 'Aditia Prasetian', '$2b$10$OGO1RSB/D2i72PcIg6OZke8855jPF.GTAzJmdK0xaul7cK4O4hv.i', 'NS');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0bdaa6de-794b-4058-8b15-495d5d91c05f', 'c32620a7a854ee5dc2cb0a9ea64b79c303bd3d105f3de5aa6c8a8867601dbfe8', '2023-09-25 11:03:26.415', '20230911153832_datetime', NULL, NULL, '2023-09-25 11:03:26.398', 1),
('24dd6f33-9882-43d7-b392-da4383ddfa1d', '8cc142015df4a8c35ed4af04a98488ec77d993e67ff42060704a740601a1fca8', '2023-09-25 11:03:26.564', '20230918015013_drum_phase', NULL, NULL, '2023-09-25 11:03:26.555', 1),
('36092cbd-7366-40eb-87f8-1d2875507cee', 'ed11d6325ab1901470062e803b50e10c519985d450e7790859e49f36a3e57605', '2023-09-25 11:03:26.498', '20230912110629_building_mc', NULL, NULL, '2023-09-25 11:03:26.486', 1),
('50ac11e3-e384-4889-b392-fa6a47a8906a', '5becde5e685db554a10f648f0fdbe1dcc36d565298663c715e4eb8f5012349d7', '2023-09-25 11:03:26.543', '20230917063502_part', NULL, NULL, '2023-09-25 11:03:26.531', 1),
('860c962f-3975-4681-9bad-9d307e1a4d61', '2a38e66c07eb54b47261f6ec2f507e17c1a57965da36bfd50404db5b9181f8be', '2023-09-25 11:03:26.593', '20230921033014_update_history', NULL, NULL, '2023-09-25 11:03:26.579', 1),
('9a96c461-7607-40a2-840a-f016f1f7ce11', '9db7f1d42a6a9296bd3bfcd9e89270184e17607252422a0ad3d16019792b8f60', '2023-09-25 11:03:33.752', '20230925110333_histories', NULL, NULL, '2023-09-25 11:03:33.740', 1),
('a8ce27fa-2ce1-431a-9e59-89e151a55b88', 'ff41b38e361734f5bcb19fde44f4921653fd9bda9bfde407a9b4da08a71e8830', '2023-09-25 11:03:26.472', '20230911175245_nik', NULL, NULL, '2023-09-25 11:03:26.426', 1),
('a93dd1a2-eb6b-4d7d-9579-a7f12bcc7023', '3c98fe4e01f9b276add5883fce842765fbe5af224219e6d7ae7620173537da9b', '2023-09-25 11:03:26.397', '20230911133243_init', NULL, NULL, '2023-09-25 11:03:26.366', 1),
('ac1735a2-12c3-41c4-9680-e754c4cd0f7d', 'dd1bfffcc42371398284de544ac5f20edefacb2f29b50a51824b453fefd32995', '2023-09-25 11:03:26.626', '20230921054317_datatype', NULL, NULL, '2023-09-25 11:03:26.611', 1),
('ae0e85aa-0281-40b1-8465-dcb5a0321474', 'efb23f8119a5fda1e52abd0c5b4497ff83e9778bcfeb4a87ace002f74bed8059', '2023-09-25 11:03:26.486', '20230912110519_building_mc', NULL, NULL, '2023-09-25 11:03:26.473', 1),
('b200e9ae-1ba8-4d78-afbc-40cdb93f14da', 'b0b54e9676bc74a96d3bc1a41eae125c9447e6475230ce8c72850e033fc8b0d5', '2023-09-25 11:03:26.425', '20230911155259_reason', NULL, NULL, '2023-09-25 11:03:26.415', 1),
('c2679d6f-6f33-4623-b637-8c774616ee1c', 'be1f205ad3b0d0d4eb616375857e5e245ab65c250972e37560b1a968188214fc', '2023-09-25 11:03:26.555', '20230918014731_add_phase', NULL, NULL, '2023-09-25 11:03:26.543', 1),
('cb7f39c4-8754-465c-b5d5-57833d6b7623', '0fc59034b369e359df701f5d8086ceffac10b1bfb4754a83acf4bff9e283668c', '2023-09-25 11:03:26.579', '20230921012333_history', NULL, NULL, '2023-09-25 11:03:26.565', 1),
('cd72da51-2a82-4f98-9f39-fb569508e2d7', '63053d01d767a87f9732822e108dbb228fa359dd9464b492403d2f76558f3290', '2023-09-25 11:03:26.530', '20230917062906_part_table', NULL, NULL, '2023-09-25 11:03:26.499', 1),
('dc392fb2-ab44-46fd-84de-e1ba16421090', 'f1c7ac11e8151860f9b2c22e5ad7ef32c6b16a2c2197406c921124336ca34247', '2023-09-25 11:03:26.610', '20230921034339_', NULL, NULL, '2023-09-25 11:03:26.593', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cleaning`
--
ALTER TABLE `Cleaning`
  ADD PRIMARY KEY (`cleaning_id`);

--
-- Indexes for table `Drum`
--
ALTER TABLE `Drum`
  ADD UNIQUE KEY `Drum_id_drum_key` (`id_drum`);

--
-- Indexes for table `History`
--
ALTER TABLE `History`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Machine`
--
ALTER TABLE `Machine`
  ADD UNIQUE KEY `Machine_building_mc_key` (`building_mc`);

--
-- Indexes for table `Monitoring`
--
ALTER TABLE `Monitoring`
  ADD UNIQUE KEY `Monitoring_building_mc_key` (`building_mc`);

--
-- Indexes for table `Part`
--
ALTER TABLE `Part`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Part_cleaning_id_fkey` (`cleaning_id`);

--
-- Indexes for table `Tub`
--
ALTER TABLE `Tub`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD UNIQUE KEY `User_nik_key` (`nik`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Cleaning`
--
ALTER TABLE `Cleaning`
  MODIFY `cleaning_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `History`
--
ALTER TABLE `History`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Part`
--
ALTER TABLE `Part`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `Tub`
--
ALTER TABLE `Tub`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Part`
--
ALTER TABLE `Part`
  ADD CONSTRAINT `Part_cleaning_id_fkey` FOREIGN KEY (`cleaning_id`) REFERENCES `Cleaning` (`cleaning_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
