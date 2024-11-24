-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2024 at 07:31 PM
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
-- Database: `yaya`
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
(1, 'Abel Happiness ', '09032166504', '9', '1716712182', '2024-07-03 06:40:04', NULL),
(2, 'Oriade Adelaja Sunday', '08121206090', '7', '1716712227', '2024-07-03 06:40:04', NULL),
(3, 'Awoniyi funmilayo oluwarantimi', '09122789007', '9', '1716712336', '2024-07-03 06:40:04', NULL),
(4, 'Adeyinka boluwatife ', '08143624528', '8', '1716712343', '2024-07-03 06:40:04', NULL),
(5, 'David ', '08163233968', '9', '1716712384', '2024-07-03 06:40:04', NULL),
(6, 'Farotimi oluwapelumi joy', '08160645815', '7', '1716712389', '2024-07-03 06:40:04', NULL),
(7, 'Tobi', '09063304091', '7', '1716712472', '2024-07-03 06:40:04', NULL),
(8, 'Adebayo Esther ', 'O8139681610', '3', '1716712485', '2024-07-03 06:40:04', NULL),
(9, 'Mummy dada', '08168984741', '7', '1716712545', '2024-07-03 06:40:04', NULL),
(11, 'new name', '08038982456', '0', '1724572099', '2024-08-25 07:48:19', 'Joy'),
(12, 'Bammy', '08068930151', '3', '1724574565', '2024-08-25 08:29:25', 'Goodness'),
(13, 'Peter', '08167077147', '9', '1724574570', '2024-08-25 08:29:30', 'Joy'),
(14, 'Emmy', '07066556091', '11', '1724574672', '2024-08-25 08:31:12', 'Joy'),
(15, 'David Bolanle', '09037682105', '9', '1724574673', '2024-08-25 08:31:13', 'Joy'),
(16, 'Olawale success Oluwaseun ', '08164762072', '9', '1724574694', '2024-08-25 08:31:34', 'Joy'),
(17, 'David Odunayo', '08163233968', '10', '1724574716', '2024-08-25 08:31:56', 'Joy'),
(18, 'Afolayan Ayo ', '08062279797', '8', '1724574774', '2024-08-25 08:32:54', 'Joy'),
(19, 'Oriade Adelaja', '08121206090', '9', '1724574791', '2024-08-25 08:33:11', 'Goodness'),
(20, 'Ayo', '09053301171', '5', '1724574838', '2024-08-25 08:33:58', 'Select Your Class'),
(21, 'Peter', '08167077147', '9', '1724574843', '2024-08-25 08:34:03', 'Joy'),
(22, 'Debose', '08148808152', '7', '1724575065', '2024-08-25 08:37:45', 'Joy'),
(23, 'Ayo', '09053301171', '5', '1724575246', '2024-08-25 08:40:46', 'Select Your Class');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
