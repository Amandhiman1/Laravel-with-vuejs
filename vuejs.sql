-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2021 at 03:22 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vuejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `vuecruddata`
--

CREATE TABLE `vuecruddata` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `salary` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vuecruddata`
--

INSERT INTO `vuecruddata` (`id`, `name`, `lastname`, `phone`, `email`, `dob`, `salary`) VALUES
(2, 'aman', 'dhiman', 78570082, 'amandhiman1322@gmail.com', '1998-03-12', '820000'),
(4, 'asdsf', 'sadfsadf', 345453464, 'swami.sadashiv@gmail.com', '2021-03-12', '2353245'),
(5, 'dasf', 'sdfs', 2353245, 'mik7541@gmail.com', '2021-03-20', '500000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vuecruddata`
--
ALTER TABLE `vuecruddata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vuecruddata`
--
ALTER TABLE `vuecruddata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
