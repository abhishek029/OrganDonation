-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 26, 2019 at 01:05 AM
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
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_donors`
--

INSERT INTO `tbl_donors` (`donor_id`, `donor_name`, `donor_desc`, `donor_thumb`, `donor_video`) VALUES
(1, 'Shauna', 'Shauna is an independent mother of 2. Shauna received the great gift of life  (Kidney Transplant) from a wonderful organ donor back in 2017.', 'shauna.jpg', 'shauna.mp4'),
(2, 'Kim', 'Kim is a school teacher and a single mother of four. One day she learned her kidneys had failed and after five years of dialysis treatment, she was added to the organ donation list.', 'kim.jpg', 'kim.mp4'),
(3, 'Ernest', 'Ernest was a person who loved life. He also was committed to being an organ donor—and told his family how much he believed in it. “He put the pink dot on his driver’s license himself,” remembers Bernice.\r\n', 'ernest.jpg', 'temp.mp4'),
(4, 'Carlee', 'Carlee has a unique distinction. She is the first person to be featured twice in organdonor.\r\nThat\'s because Carlee is the fortunate recipient of two heart transplants: the first when she was 1½ years old, the second when she was 13.', 'carlee.jpg', 'temp.mp4'),
(5, 'Brandon', 'Brandon’s parents donated his organs at Beaumont Hospital, Royal Oak, in February 2007. Brandon himself made that decision years earlier.', 'brandon.jpg', 'temp.mp4'),
(6, 'Gabriel', 'Gabriel received a kidney transplant when he was only two years old. Years later, Gabriel continues to thrive thanks to his donor’s generous gift. He is an avid reader and creative artist. ', 'gabriel.jpg', 'temp.mp4'),
(7, 'Daisy', 'From early childhood, Daisy suffered from aneurysms and a heart malformation. At age 17, her doctors decided she needed open-heart surgery. Although the surgery was a success, an undiscovered brain aneurysm ruptured shortly afterward and Daisy was declared brain dead.', 'daisy.jpg', 'temp.mp4'),
(8, 'Blake', 'Blake was very young when he received the great gift of life (Heart Transplant) Today, at 14, Blake is a normal, active teenager and a high school freshman who loves sports, loves his team, and whose favorite subject in school is algebra.', 'blake.jpg', 'temp.mp4');

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
