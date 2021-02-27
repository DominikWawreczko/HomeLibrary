-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 27, 2021 at 01:28 PM
-- Server version: 5.7.33-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WWW20_WAWRECZKO`
--

-- --------------------------------------------------------

--
-- Table structure for table `Books`
--

CREATE TABLE `Books` (
  `ID` int(11) NOT NULL,
  `ISBN` bigint(20) NOT NULL,
  `Author` text COLLATE latin2_bin NOT NULL,
  `Title` text COLLATE latin2_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COLLATE=latin2_bin;

--
-- Dumping data for table `Books`
--

INSERT INTO `Books` (`ID`, `ISBN`, `Author`, `Title`) VALUES
(1, 9786155211416, 'Gall Anonim', 'Kroniki'),
(2, 9788304046139, 'Mistrz Wincenty Kadłubek', 'Kronika Polska'),
(3, 9788377679562, 'Ignacio Echaniz SJ', 'Jezuici'),
(4, 9788328302341, 'Robert C. Martin', 'Clean Code'),
(5, 122222, 'Henryk Sienkiewicz', 'Potop');

-- --------------------------------------------------------

--
-- Table structure for table `Borrow`
--

CREATE TABLE `Borrow` (
  `ID` int(11) NOT NULL,
  `Borrower` text COLLATE latin2_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COLLATE=latin2_bin;

--
-- Dumping data for table `Borrow`
--

INSERT INTO `Borrow` (`ID`, `Borrower`) VALUES
(4, 'Jaś'),
(3, 'Tata'),
(1, 'Jaś');

-- --------------------------------------------------------

--
-- Table structure for table `Reviews`
--

CREATE TABLE `Reviews` (
  `ISBN` bigint(20) NOT NULL,
  `Review` text COLLATE latin2_bin NOT NULL,
  `Writer` text COLLATE latin2_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COLLATE=latin2_bin;

--
-- Dumping data for table `Reviews`
--

INSERT INTO `Reviews` (`ISBN`, `Review`, `Writer`) VALUES
(9786155211416, 'Rewelacja', 'Matejko Jan'),
(9786155211416, 'Super ksiażka!!!!', 'Romuald Tolkien'),
(9788328302341, 'Super.', 'Antoni'),
(9786155211416, 'Rozszerza Horyzonty', 'Historyk'),
(122222, 'Super', 'Dominik');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Books`
--
ALTER TABLE `Books`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Books`
--
ALTER TABLE `Books`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
