-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2023 at 05:23 AM
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
-- Table structure for table `cleaning`
--

CREATE TABLE `cleaning` (
  `cleaning_id` int(11) NOT NULL,
  `id_drum` varchar(20) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `date_cleaning` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cleaning`
--

INSERT INTO `cleaning` (`cleaning_id`, `id_drum`, `pic`, `date_cleaning`) VALUES
(4, 'I16P-H21B-05', 'Aditia Prasetian', '2023-09-17 13:57:46'),
(5, 'I13P-H19A-03', 'Aditia Prasetian', '2023-09-18 06:13:56'),
(6, 'I13P-H19A-01', 'Aditia Prasetian', '2023-09-18 06:18:27'),
(7, 'I13P-H19A-02', 'Aditia Prasetian', '2023-09-18 06:19:49'),
(8, 'I13P-H19A-01', 'Aditia Prasetian', '2023-09-18 06:42:02'),
(9, 'I14P-H19A-01', 'Aditia Prasetian', '2023-09-19 03:47:48'),
(10, 'I14P-H19A-02', 'Aditia Prasetian', '2023-09-19 05:00:46'),
(12, 'I13P-H19A-01', 'Aditia Prasetian', '2023-09-22 04:23:57'),
(13, 'I13P-H19A-04', 'Aditia Prasetian', '2023-09-22 06:04:37');

-- --------------------------------------------------------

--
-- Table structure for table `drum`
--

CREATE TABLE `drum` (
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
-- Dumping data for table `drum`
--

INSERT INTO `drum` (`id_drum`, `rim`, `type`, `status`, `building_mc`, `age`, `date_naik`, `date_turun`, `reason`, `phase`) VALUES
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
('I16L-H30A-29', 16, 'LTR', 'use', 'H1305', 0, '2023-09-22 04:15:10', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-30', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-31', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-32', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-33', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30A-34', 16, 'LTR', 'unuse', '', 0, '2023-09-13 11:35:08', '2023-09-13 11:35:08', NULL, 'Phase 1'),
('I16L-H30B-19', 16, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30B-20', 16, 'LTR', 'use', 'H1704', 5, '2023-09-18 04:06:14', '2023-09-18 03:33:08', 'Bladder Bocor', 'Phase 2'),
('I16L-H30B-21', 16, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30B-22', 16, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30B-23', 16, 'LTR', 'unuse', '', 0, '2023-09-06 10:53:35', '2023-09-04 20:10:01', NULL, 'Phase 2'),
('I16L-H30B-24', 16, 'LTR', 'use', 'H1704', 5, '2023-09-18 04:06:25', '2023-09-18 03:33:05', 'Bladder Bocor', 'Phase 2'),
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
('I16P-H21B-01', 16, 'PCR', 'use', 'H1502', 5, '2023-09-18 04:08:04', '2023-09-18 03:33:12', 'Bladder Bocor', 'Phase 2'),
('I16P-H21B-02', 16, 'PCR', 'use', 'H1502', 5, '2023-09-18 04:08:11', '2023-09-18 03:33:15', 'Bladder Bocor', 'Phase 2'),
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
-- Table structure for table `history`
--

CREATE TABLE `history` (
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
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `id_drum`, `building_mc`, `age`, `reason`, `PIC`, `date`, `type`) VALUES
(9, 'I13P-H19A-01', 'H1102', 2, 'Cleaning', 'Aditia Prasetian', '2023-09-21 05:47:13', 'Turun'),
(10, 'I13P-H19A-04', 'H1102', 2, 'Cleaning', 'Aditia Prasetian', '2023-09-21 05:48:29', 'Turun'),
(11, 'I17P-H21A-01', 'H1103', 0, '', 'Aditia Prasetian', '2023-09-21 05:48:41', 'Naik'),
(12, 'I13P-H19A-01', 'H1102', 2, '', 'Aditia Prasetian', '2023-09-21 05:49:17', 'Naik'),
(13, 'I13P-H19A-01', 'H1102', 2, 'Ganti Size', 'Aditia Prasetian', '2023-09-21 08:04:56', 'Turun'),
(14, 'I17P-H21A-01', 'H1103', 0, 'Ganti Size', 'Aditia Prasetian', '2023-09-21 08:05:19', 'Turun'),
(15, 'I16L-H30A-29', 'H1305', 0, '-', 'Aditia Prasetian', '2023-09-22 04:15:10', 'Naik');

-- --------------------------------------------------------

--
-- Table structure for table `machine`
--

CREATE TABLE `machine` (
  `building_mc` varchar(10) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `phase` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `machine`
--

INSERT INTO `machine` (`building_mc`, `status`, `phase`) VALUES
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
-- Table structure for table `monitoring`
--

CREATE TABLE `monitoring` (
  `building_mc` varchar(10) NOT NULL,
  `id_left` varchar(20) DEFAULT NULL,
  `id_right` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `phase` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `monitoring`
--

INSERT INTO `monitoring` (`building_mc`, `id_left`, `id_right`, `status`, `phase`) VALUES
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
('H1305', 'I16L-H30A-29', '', 'use', 'Phase 1'),
('H1401', '', '', 'unuse', 'Phase 1'),
('H1402', '', '', 'unuse', 'Phase 1'),
('H1403', '', '', 'unuse', 'Phase 1'),
('H1404', '', '', 'unuse', 'Phase 1'),
('H1405', '', '', 'unuse', 'Phase 1'),
('H1501', '', '', 'unuse', 'Phase 2'),
('H1502', 'I16P-H21B-01', 'I16P-H21B-02', 'use', 'Phase 2'),
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
('H1704', 'I16L-H30B-20', 'I16L-H30B-24', 'use', 'Phase 2'),
('H1705', '', '', 'unuse', 'Phase 2'),
('H1801', '', '', 'unuse', 'Phase 2'),
('H1802', '', '', 'unuse', 'Phase 2'),
('H1803', '', '', 'unuse', 'Phase 2'),
('H1804', 'I16P-H21B-05', 'I16P-H21B-06', 'use', 'Phase 2'),
('H1805', 'I16P-H21B-10', 'I16P-H21B-11', 'use', 'Phase 2');

-- --------------------------------------------------------

--
-- Table structure for table `part`
--

CREATE TABLE `part` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `cleaning_id` int(11) DEFAULT NULL,
  `change` varchar(10) NOT NULL,
  `qty` int(11) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `part`
--

INSERT INTO `part` (`id`, `name`, `cleaning_id`, `change`, `qty`, `status`) VALUES
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
(130, 'Thread & Screw', 13, 'No', 0, 'OK');

-- --------------------------------------------------------

--
-- Table structure for table `tub`
--

CREATE TABLE `tub` (
  `id` int(11) NOT NULL,
  `tub_width` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tub`
--

INSERT INTO `tub` (`id`, `tub_width`) VALUES
(1, 320),
(2, 345),
(3, 360),
(4, 375),
(5, 400),
(6, 420);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `nik` varchar(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `workgroup` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`nik`, `username`, `password`, `workgroup`) VALUES
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
('0dca0f9c-ab5e-4ca4-8aac-74b11c32ad27', 'f1c7ac11e8151860f9b2c22e5ad7ef32c6b16a2c2197406c921124336ca34247', '2023-09-21 03:43:40.024', '20230921034339_', NULL, NULL, '2023-09-21 03:43:39.978', 1),
('13759a48-33d7-40c7-9f8a-b07a9098c7d6', 'b6be232f2846a78ae0484cee1ca764b5b9f53ba301441ee9e2549a9c83e837fa', '2023-09-18 01:47:21.078', '20230911153832_datetime', NULL, NULL, '2023-09-18 01:47:21.016', 1),
('2955e765-17c6-4bc4-8a97-41ed8adda93a', '8cc142015df4a8c35ed4af04a98488ec77d993e67ff42060704a740601a1fca8', '2023-09-18 01:50:13.312', '20230918015013_drum_phase', NULL, NULL, '2023-09-18 01:50:13.281', 1),
('2fdae95f-e0a4-4c38-9e51-32a247e2dbe4', '2a38e66c07eb54b47261f6ec2f507e17c1a57965da36bfd50404db5b9181f8be', '2023-09-21 03:30:14.706', '20230921033014_update_history', NULL, NULL, '2023-09-21 03:30:14.675', 1),
('33c1f4b1-eadc-4a85-b413-4ecd1600d04a', '769dabdae6df8647dfc7acfa30791fb1209ad9216e1e6a70f8c564c338c6ff5e', '2023-09-18 01:47:21.386', '20230917062906_part_table', NULL, NULL, '2023-09-18 01:47:21.276', 1),
('3ec7b3cd-a3ef-4406-b318-cb7e3a6afc79', 'dd1bfffcc42371398284de544ac5f20edefacb2f29b50a51824b453fefd32995', '2023-09-21 05:43:17.738', '20230921054317_datatype', NULL, NULL, '2023-09-21 05:43:17.689', 1),
('4e8ec80c-370f-446c-a221-724ebfe77040', 'edfa6b4b4b4735fdcac25f0006998f4d79bcc411d3d40fe8e8625d382a1dd391', '2023-09-18 01:47:21.229', '20230912110519_building_mc', NULL, NULL, '2023-09-18 01:47:21.185', 1),
('4eba1905-692a-4c0f-a004-568e6a7668fc', '6d03e9e443a0e58635648994e4a612c400d993411d6fd4234b2ffcc070ee1e5b', '2023-09-18 01:47:21.183', '20230911175245_nik', NULL, NULL, '2023-09-18 01:47:21.118', 1),
('6b8c76ab-ef1e-418d-93e7-9dd53ebcf8a6', '18f62852d61a4a5cea1ed227da7f440de31a54fa47099b8a4726d6b2be8b50b9', '2023-09-18 01:47:21.275', '20230912110629_building_mc', NULL, NULL, '2023-09-18 01:47:21.230', 1),
('854ea757-c842-4559-9c14-40d2b1cbcb26', 'be1f205ad3b0d0d4eb616375857e5e245ab65c250972e37560b1a968188214fc', '2023-09-18 01:47:31.824', '20230918014731_add_phase', NULL, NULL, '2023-09-18 01:47:31.782', 1),
('86a36aee-bc81-440f-a03f-56a782cca169', 'ec61c027f8ae46ba476f21edeb629ee49b60a512dfd908d247196084a932096f', '2023-09-18 01:47:21.014', '20230911133243_init', NULL, NULL, '2023-09-18 01:47:20.955', 1),
('92199da2-cad4-49a2-8f0a-0dcdab8c3c0f', '1bba1491b8ca1a3872c4171fb3bafb28cd77e670e167e9b17d843b487f874b8b', '2023-09-18 01:47:21.431', '20230917063502_part', NULL, NULL, '2023-09-18 01:47:21.388', 1),
('ce403607-8ae5-4351-ae2b-abd533f14884', '0fc59034b369e359df701f5d8086ceffac10b1bfb4754a83acf4bff9e283668c', '2023-09-21 01:23:33.950', '20230921012333_history', NULL, NULL, '2023-09-21 01:23:33.913', 1),
('e8596a15-9196-4052-b98a-a464cc3c16d7', '4712f95aaa7acd6d9d58598b21f239a7e2c5d5cb1a1f7d46defeb6216c1222a5', '2023-09-18 01:47:21.116', '20230911155259_reason', NULL, NULL, '2023-09-18 01:47:21.079', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cleaning`
--
ALTER TABLE `cleaning`
  ADD PRIMARY KEY (`cleaning_id`);

--
-- Indexes for table `drum`
--
ALTER TABLE `drum`
  ADD UNIQUE KEY `Drum_id_drum_key` (`id_drum`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `machine`
--
ALTER TABLE `machine`
  ADD UNIQUE KEY `Machine_building_mc_key` (`building_mc`);

--
-- Indexes for table `monitoring`
--
ALTER TABLE `monitoring`
  ADD UNIQUE KEY `Monitoring_building_mc_key` (`building_mc`);

--
-- Indexes for table `part`
--
ALTER TABLE `part`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Part_cleaning_id_fkey` (`cleaning_id`);

--
-- Indexes for table `tub`
--
ALTER TABLE `tub`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
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
-- AUTO_INCREMENT for table `cleaning`
--
ALTER TABLE `cleaning`
  MODIFY `cleaning_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `part`
--
ALTER TABLE `part`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT for table `tub`
--
ALTER TABLE `tub`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `part`
--
ALTER TABLE `part`
  ADD CONSTRAINT `Part_cleaning_id_fkey` FOREIGN KEY (`cleaning_id`) REFERENCES `cleaning` (`cleaning_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
