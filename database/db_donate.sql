-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 20, 2019 at 04:10 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_donate`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_donors`
--

DROP TABLE IF EXISTS `tbl_donors`;
CREATE TABLE IF NOT EXISTS `tbl_donors` (
  `donor_id` int(11) NOT NULL AUTO_INCREMENT,
  `donor_name` varchar(75) NOT NULL,
  `donor_desc` text NOT NULL,
  `donor_thumb` varchar(125) NOT NULL,
  `donor_video` varchar(125) NOT NULL,
  PRIMARY KEY (`donor_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_donors`
--

INSERT INTO `tbl_donors` (`donor_id`, `donor_name`, `donor_desc`, `donor_thumb`, `donor_video`) VALUES
(1, 'Donor1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. All you need is health card and a couple of minutes to become an organ donor.', 'donor1.jpg', 'donor1.mp4'),
(2, 'Donor2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. All you need is health card and a couple of minutes to become an organ donor.', 'donor2.jpg', 'donor2.mp4'),
(3, 'Donor3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. All you need is health card and a couple of minutes to become an organ donor.', 'donor3.jpg', 'donor3.mp4'),
(4, 'Donor4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. All you need is health card and a couple of minutes to become an organ donor.', 'donor4.jpg', 'donor4.mp4'),
(5, 'Donor5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. All you need is health card and a couple of minutes to become an organ donor.', 'donor5.jpg', 'donor5.mp4'),
(6, 'Donor6', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. All you need is health card and a couple of minutes to become an organ donor.', 'donor6.jpg', 'donor6.mp4'),
(7, 'Donor7', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. All you need is health card and a couple of minutes to become an organ donor.', 'donor7.jpg', 'donor7.mp4'),
(8, 'Donor8', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. All you need is health card and a couple of minutes to become an organ donor.', 'donor8.jpg', 'donor8.mp4'),
(13, 'Donor9', 'description of donor9', 'donor9.jpg', 'donor9.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subscriber`
--

DROP TABLE IF EXISTS `tbl_subscriber`;
CREATE TABLE IF NOT EXISTS `tbl_subscriber` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(125) NOT NULL,
  `number` bigint(15) NOT NULL,
  `subscribe_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_subscriber`
--

INSERT INTO `tbl_subscriber` (`id`, `name`, `email`, `number`, `subscribe_date`) VALUES
(1, 'Pan', 'pan@gmail.com', 4379907879, '2019-02-19 20:59:16'),
(2, 'Main', 'abc@abc', 122456667, '2019-02-19 21:21:51');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(150) NOT NULL,
  `user_name` varchar(75) NOT NULL,
  `user_pass` varchar(75) NOT NULL,
  `user_email` varchar(125) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`) VALUES
(1, 'Developer', 'abhi', 'abhi', 'abhi@gmail.com'),
(2, 'PM', 'main', 'main', 'main@gmail.com'),
(3, 'Developer', 'jinkal', 'jinkal', 'jinkal@gmail.com'),
(4, 'Motion', 'connor', 'connor', 'connor@gmail.com'),
(5, 'Designer', 'kyle', 'kyle', 'kyle@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
