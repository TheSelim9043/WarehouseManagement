-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2022 at 09:47 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warehouse_management_37044`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerID` int(11) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile` int(11) NOT NULL,
  `phone2` int(11) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `district` varchar(30) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Active',
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customerID`, `fullName`, `email`, `mobile`, `phone2`, `address`, `address2`, `city`, `district`, `status`, `createdOn`) VALUES
(53, 'Selim YILDIZ', 'selimmail@gmail.com', 2137483645, 2137483645, 'Kecioren , EvoglubasinCadde , 23/12', '76/25', 'Ankara', 'Kecioren', 'Male', '2022-05-21 20:05:57'),
(54, 'Cristiano RONALDO', 'CRRonaldo@gmail.com', 1241241231, 434235624, 'Manchester, North Manchester ', '45/13', 'Ankara', 'Cankaya', 'Male', '2022-05-21 20:12:35'),
(55, 'Magnus Carlsen', 'magnuscarlsen@gmail.com', 13148331, 21478455, 'Norway, Tornsberg', '55/25', 'Ankara', 'Kizilay', 'Male', '2022-05-21 20:13:29'),
(56, 'Fabiano Caruana', 'fabianocaruana@gmail.com', 243141312, 43254362, 'Italy, Milan', '93/25', 'Ankara', 'Polatli', 'Male', '2022-05-21 20:13:56'),
(57, 'Stephen Curry', 'Curry30@gmail.com', 123124124, 2147483647, 'Usa, California', 'North CA , 45/35', 'Ankara', 'Etimesgut', 'Male', '2022-05-21 20:16:49'),
(58, 'Dimitrios Pelkas', 'Curry30@gmail.com', 4354523, 43367523, 'Greece, Athens', 'Athens , 98/43', 'Ankara', 'Golbasi', 'Male', '2022-05-21 20:18:07'),
(61, 'Jan-Krzysztof Duda', 'Krzystof@gmail.com', 1244683647, 2147483647, 'Poland, Krak&oacute;w', 'Wieliczka 74/35', 'Ankara', 'Yenimahalle', 'Male', '2022-05-21 22:00:31'),
(62, 'Marie Curie', 'Mariecurie@gmail.com', 344748364, 123125361, 'Poland, Warsaw', 'Okopowa, 35/12', 'Ankara', 'Elmadag', 'Female', '2022-05-21 22:02:49'),
(63, 'Ellen ( Elliot ) Page', 'elliotpage@gmail.com', 343532123, 45451321, 'Washinghton DC, USA', '90/120', 'Ankara', 'Esat', 'Other', '2022-05-22 15:07:23');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `productID` int(11) NOT NULL,
  `itemNumber` varchar(255) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `discount` float NOT NULL DEFAULT 0,
  `stock` int(11) NOT NULL DEFAULT 0,
  `unitPrice` float NOT NULL DEFAULT 0,
  `imageURL` varchar(255) NOT NULL DEFAULT 'imageNotAvailable.jpg',
  `status` varchar(255) NOT NULL DEFAULT 'Active',
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`productID`, `itemNumber`, `itemName`, `discount`, `stock`, `unitPrice`, `imageURL`, `status`, `description`) VALUES
(60, '21345', 'Iphone 8', 10, 12, 164.99, 'imageNotAvailable.jpg', 'Active', 'This is the Apple, Iphone8!'),
(61, '21346', 'Iphone X', 5, 25, 679.99, 'imageNotAvailable.jpg', 'Active', 'This is the Apple, IphoneX!'),
(63, '9043', 'Hp Pavilion Notebook ', 10, 1200, 2300, 'imageNotAvailable.jpg', 'Active', 'This is the best Gaming Computer ever created! HP Pavilion Notebook with its 16 GB RAM, 6 GB Vram and 16 inc screen can easily open all games on Ultra Settings.\nEnjoy!'),
(64, '21341123', 'MSI Gaming Notebook', 5, 20, 1120, 'imageNotAvailable.jpg', 'Active', 'This is the moderate, MSI Gaming Notebook'),
(65, '21341125', 'Samsung Smart TV', 0, 200, 2550, 'imageNotAvailable.jpg', 'Active', 'This is the smart TV, you can watch Netflix and other services.'),
(66, '51341125', 'MacBook Pro', 0, 175, 2263.61, 'imageNotAvailable.jpg', 'Active', 'This is the , MacBook Pro, easily one of the best computers with IOS!\n'),
(67, '90432113', 'Steam Deck', 0, 260, 399, 'imageNotAvailable.jpg', 'Active', 'This is the Steam Deck. With this, you can play all steam games in very small portions, everywhere.\n'),
(68, '124114', 'Valve VR HeadSet', 10, 1235, 1399.99, 'imageNotAvailable.jpg', 'Active', 'This is the Steam Deck. With this, you can play all steam games in very small portions, everywhere.\n'),
(69, '523123', 'Logitech Mouse ', 0, 500, 50.99, 'imageNotAvailable.jpg', 'Active', 'The best mouse ever!'),
(71, '24356431', 'Logitech Keyboard', 0, 210, 55.99, 'imageNotAvailable.jpg', 'Active', 'This is the best Keyboard for the gaming experience.'),
(76, '37044', 'Apple TV', 25, 100, 313.72, 'imageNotAvailable.jpg', 'Active', 'Best Television to watch movies 4K!'),
(77, '345675', 'Iphone13 PRO', 10, 1500, 999.99, 'imageNotAvailable.jpg', 'Active', 'This is the Apple, Iphone13 PRO!');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `fullName`, `username`, `password`, `status`) VALUES
(7, 'admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Active'),
(8, 'Selim', 'YILDIZ', '81dc9bdb52d04dc20036dbd8313ed055', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerID`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
