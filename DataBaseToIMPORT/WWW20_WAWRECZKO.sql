-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 25, 2021 at 05:58 PM
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
-- Table structure for table `Ksiazki`
--

CREATE TABLE `Ksiazki` (
  `ID` int(11) NOT NULL,
  `ISBN` bigint(20) NOT NULL,
  `Autor` text COLLATE latin2_bin NOT NULL,
  `Tytul` text COLLATE latin2_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COLLATE=latin2_bin;

--
-- Dumping data for table `Ksiazki`
--

INSERT INTO `Ksiazki` (`ID`, `ISBN`, `Autor`, `Tytul`) VALUES
(1, 9786155211416, 'Gall Anonim', 'Kroniki'),
(2, 9788304046139, 'Mistrz Wincenty Kadłubek', 'Kronika Polska'),
(3, 9788377679562, 'Ignacio Echaniz SJ', 'Jezuici'),
(4, 9788328302341, 'Robert C. Martin', 'Clean Code'),
(5, 122222, 'Henryk Sienkiewicz', 'Potop');

-- --------------------------------------------------------

--
-- Table structure for table `Opinie`
--

CREATE TABLE `Opinie` (
  `ISBN` bigint(20) NOT NULL,
  `Opinia` text COLLATE latin2_bin NOT NULL,
  `Wystawiajacy` text COLLATE latin2_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COLLATE=latin2_bin;

--
-- Dumping data for table `Opinie`
--

INSERT INTO `Opinie` (`ISBN`, `Opinia`, `Wystawiajacy`) VALUES
(9786155211416, 'Rewelacja', 'Matejko Jan'),
(9786155211416, 'Super ksiażka!!!!', 'Romuald Tolkien'),
(9788328302341, 'Super.', 'Antoni'),
(9786155211416, 'Rozszerza Horyzonty', 'Historyk'),
(122222, 'Super', 'Dominik');

-- --------------------------------------------------------

--
-- Table structure for table `Wypozyczenia`
--

CREATE TABLE `Wypozyczenia` (
  `ID` int(11) NOT NULL,
  `Wypozyczajacy` text COLLATE latin2_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2 COLLATE=latin2_bin;

--
-- Dumping data for table `Wypozyczenia`
--

INSERT INTO `Wypozyczenia` (`ID`, `Wypozyczajacy`) VALUES
(4, 'Jaś'),
(3, 'Tata'),
(1, 'Jaś');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Ksiazki`
--
ALTER TABLE `Ksiazki`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Ksiazki`
--
ALTER TABLE `Ksiazki`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
