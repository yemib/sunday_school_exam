-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2024 at 07:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adult`
--

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `score` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `class_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `name`, `phone`, `score`, `duration`, `created_at`, `class_name`) VALUES
(1, '667899898977', '676878565', '0', '1716712551', '2024-07-03 06:40:32', NULL),
(2, 'Mrs funke', '0703119752', '8', '1716712551', '2024-07-03 06:40:32', NULL),
(3, 'Moj', '08032748144', '7', '1716712584', '2024-07-03 06:40:32', NULL),
(4, 'Adelakun F.A', '08165578722', '10', '1716712723', '2024-07-03 06:40:32', NULL),
(5, 'Joy chiboy', '0703988427', '10', '1716712745', '2024-07-03 06:40:32', NULL),
(6, 'Adewale Fadekemi ', '08036974377', '9', '1716712861', '2024-07-03 06:40:32', NULL),
(7, 'Joy chiboy', '0703988427', '10', '1716712929', '2024-07-03 06:40:32', NULL),
(11, 'Adewale Fadekemi ', '08036974377', '9', '1724574522', '2024-08-25 08:28:42', 'Love'),
(12, 'Adelusi Adesola ', '08060762371', '10', '1724574646', '2024-08-25 08:30:46', 'Love'),
(13, 'FAOKUNLA JUMOKE', '08067545416', '8', '1724574716', '2024-08-25 08:31:56', 'Faith'),
(14, 'Adewale Fadekemi ', '08036974377', '9', '1724574737', '2024-08-25 08:32:17', 'Love'),
(15, 'Adeolowo ', '08062381584', '7', '1724574756', '2024-08-25 08:32:36', 'Faith'),
(16, 'Mum olorunfemi', '08036051118', '4', '1724574760', '2024-08-25 08:32:40', 'Faith'),
(17, 'AJAYI OLUWAKEMISOLA ', '09066863030', '6', '1724574808', '2024-08-25 08:33:28', 'Faith'),
(18, 'Oluwadare Temitope ', '09031546929', '7', '1724574821', '2024-08-25 08:33:41', 'Faith'),
(19, 'Mum olorunfemi', '08036051118', '4', '1724574869', '2024-08-25 08:34:29', 'Faith'),
(20, 'Oluwadare Temitope ', '09031546929', '7', '1724574913', '2024-08-25 08:35:13', 'Faith'),
(21, 'Obafemi Christianah', '07036070355', '9', '1724575228', '2024-08-25 08:40:28', 'Faith');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
