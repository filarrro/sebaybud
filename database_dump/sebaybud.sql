-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Maj 2017, 21:16
-- Wersja serwera: 10.1.16-MariaDB
-- Wersja PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `sebaybud`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `source` varchar(255) NOT NULL,
  `thumb` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `type` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `files`
--

INSERT INTO `files` (`id`, `source`, `thumb`, `desc`, `type`, `createdAt`, `updatedAt`) VALUES
(6, 'ByjbU8Hae.jpg', 'ByjbU8Hae_thumb.jpg', '', 1, '2017-04-07 18:10:10', '2017-04-07 18:10:10'),
(7, 'H1gGLLSpl.jpg', 'H1gGLLSpl_thumb.jpg', '', 1, '2017-04-07 18:10:16', '2017-04-07 18:10:16'),
(8, 'BJBz8LB6l.jpg', 'BJBz8LB6l_thumb.jpg', '', 1, '2017-04-07 18:10:21', '2017-04-07 18:10:21'),
(9, 'HyqMU8rTl.jpg', 'HyqMU8rTl_thumb.jpg', '', 1, '2017-04-07 18:10:26', '2017-04-07 18:10:26'),
(10, 'rkKm8US6g.jpg', 'rkKm8US6g_thumb.jpg', '', 1, '2017-04-07 18:10:40', '2017-04-07 18:10:40'),
(11, 'B1e4IIrTg.jpg', 'B1e4IIrTg_thumb.jpg', '', 1, '2017-04-07 18:10:47', '2017-04-07 18:10:47'),
(12, 'B1BEU8rpg.jpg', 'B1BEU8rpg_thumb.jpg', '', 1, '2017-04-07 18:10:53', '2017-04-07 18:10:53'),
(13, 'BJsE8IH6x.jpg', 'BJsE8IH6x_thumb.jpg', '', 1, '2017-04-07 18:10:59', '2017-04-07 18:10:59'),
(14, 'SJeBIIH6e.jpg', 'SJeBIIH6e_thumb.jpg', '', 1, '2017-04-07 18:11:04', '2017-04-07 18:11:04'),
(15, 'BJPSIISax.jpg', 'BJPSIISax_thumb.jpg', '', 1, '2017-04-07 18:11:11', '2017-04-07 18:11:11'),
(16, 'SJABI8H6e.jpg', 'SJABI8H6e_thumb.jpg', '', 1, '2017-04-07 18:11:17', '2017-04-07 18:11:17'),
(17, 'By4I8LS6l.jpg', 'By4I8LS6l_thumb.jpg', '', 1, '2017-04-07 18:11:23', '2017-04-07 18:11:23'),
(18, 'r1cULUH6x.jpg', 'r1cULUH6x_thumb.jpg', '', 1, '2017-04-07 18:11:29', '2017-04-07 18:11:29'),
(19, 'S1gvULBTx.jpg', 'S1gvULBTx_thumb.jpg', '', 1, '2017-04-07 18:11:35', '2017-04-07 18:11:35'),
(20, 'HJUP8ISal.jpg', 'HJUP8ISal_thumb.jpg', '', 1, '2017-04-07 18:11:42', '2017-04-07 18:11:42'),
(21, 'Sk2PUUHal.jpg', 'Sk2PUUHal_thumb.jpg', '', 1, '2017-04-07 18:11:48', '2017-04-07 18:11:48'),
(22, 'rkzdIUSpg.jpg', 'rkzdIUSpg_thumb.jpg', '', 1, '2017-04-07 18:11:54', '2017-04-07 18:11:54'),
(23, 'B15O8LS6e.jpg', 'B15O8LS6e_thumb.jpg', '', 1, '2017-04-07 18:12:01', '2017-04-07 18:12:01'),
(24, 'HkVtI8ral.jpg', 'HkVtI8ral_thumb.jpg', '', 1, '2017-04-07 18:12:12', '2017-04-07 18:12:12'),
(25, 'HycFILrae.jpg', 'HycFILrae_thumb.jpg', '', 1, '2017-04-07 18:12:17', '2017-04-07 18:12:17'),
(26, 'SJkqILHae.jpg', 'SJkqILHae_thumb.jpg', '', 1, '2017-04-07 18:12:23', '2017-04-07 18:12:23'),
(27, 'S1I9ILrTg.jpg', 'S1I9ILrTg_thumb.jpg', '', 1, '2017-04-07 18:12:29', '2017-04-07 18:12:29'),
(28, 'rJjqLISal.jpg', 'rJjqLISal_thumb.jpg', '', 1, '2017-04-07 18:12:35', '2017-04-07 18:12:35'),
(29, 'rJMjILS6x.jpg', 'rJMjILS6x_thumb.jpg', '', 1, '2017-04-07 18:12:42', '2017-04-07 18:12:42'),
(30, 'HJiiIUBag.jpg', 'HJiiIUBag_thumb.jpg', '', 1, '2017-04-07 18:12:50', '2017-04-07 18:12:50'),
(31, 'B1Lh8IHpl.jpg', 'B1Lh8IHpl_thumb.jpg', '', 1, '2017-04-07 18:13:01', '2017-04-07 18:13:01'),
(32, 'SkshIIH6e.jpg', 'SkshIIH6e_thumb.jpg', '', 1, '2017-04-07 18:13:07', '2017-04-07 18:13:07'),
(33, 'S1e6IIBTg.jpg', 'S1e6IIBTg_thumb.jpg', '', 1, '2017-04-07 18:13:12', '2017-04-07 18:13:12');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pricecategories`
--

CREATE TABLE `pricecategories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `pricecategories`
--

INSERT INTO `pricecategories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'Układanie glazury', '2016-12-15 20:41:48', '2017-04-06 18:14:49'),
(3, 'Prace instalacyjne', '2016-12-15 20:46:46', '2016-12-15 20:46:46'),
(4, 'Prace malarskie', '2016-12-15 20:53:41', '2016-12-15 20:53:41'),
(5, 'Technologie gipsowe', '2016-12-15 20:57:27', '2016-12-15 20:57:27'),
(6, 'Prace murarsko-tynkarskie', '2016-12-15 21:02:15', '2016-12-15 21:02:15'),
(7, 'Prace stolarsko-okładzinowe', '2016-12-15 21:07:59', '2016-12-15 21:07:59'),
(8, 'Instalacje elektryczne', '2016-12-15 21:13:58', '2016-12-15 21:13:58'),
(9, 'Inne prace wykończeniowe', '2016-12-15 21:18:36', '2016-12-15 21:18:36'),
(10, 'Wycena', '2016-12-15 21:21:16', '2016-12-15 21:21:16');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `prices`
--

INSERT INTO `prices` (`id`, `name`, `price`, `createdAt`, `updatedAt`, `categoryId`) VALUES
(1, 'Kafelkowanie (zależnie od wielkości)', '30,00-45,00 zł/m2', '2016-12-15 20:42:12', '2016-12-15 20:42:12', 2),
(2, 'Kafelkowanie płytki (10x10)', '5,00 zł/m2', '2016-12-15 20:42:31', '2016-12-15 20:42:31', 2),
(3, 'Kafelkowanie parapetów inne-nietypowe', '60,00 zł/mb', '2016-12-15 20:42:50', '2016-12-15 20:42:50', 2),
(4, 'Glazura i terakota w caro', '40,00 zł/m2', '2016-12-15 20:43:00', '2016-12-15 20:43:00', 2),
(5, 'Montaż cokołów ciętych', '8,00 zł/mb', '2016-12-15 20:43:15', '2016-12-15 20:43:15', 2),
(6, 'Montaż cokołów gotowych', '6,00 zł/mb', '2016-12-15 20:43:28', '2016-12-15 20:43:28', 2),
(7, 'Skucie fliz', '10,00 zł/m2', '2016-12-15 20:43:43', '2016-12-15 20:43:43', 2),
(8, 'Skucie starej glazury', '12,00 zł/m2', '2016-12-15 20:43:56', '2016-12-15 20:43:56', 2),
(9, 'Wyrównanie podłoża pod flizy', '12,00 zł/m2', '2016-12-15 20:44:10', '2016-12-15 20:44:10', 2),
(10, 'Ułożenie gresu', '40,00 zł/m2', '2016-12-15 20:44:22', '2016-12-15 20:44:22', 2),
(11, 'Ułożenie fliz na schodach', '60,00 zł/m2', '2016-12-15 20:44:34', '2016-12-15 20:44:34', 2),
(12, 'Wykonanie półki wraz z wykafelkowaniem', '80,00 zł/mb', '2016-12-15 20:44:47', '2016-12-15 20:44:47', 2),
(13, 'Wyrównanie podłoża do 3cm pod układanie glazury', '15,00-20,00 zł/m2', '2016-12-15 20:45:02', '2016-12-15 20:45:02', 2),
(14, 'Rekonstruowanie ścian pod glazurę za pomocą zapraw tynkarskich lub płyt gipsowych, bez konieczności stosowania profili', '25,00-30,00 zł/m2', '2016-12-15 20:45:20', '2016-12-15 20:45:20', 2),
(15, 'Wstawienie szlaczka ozdobnego lub wałeczka', '9,00 zł/mb', '2016-12-15 20:45:36', '2016-12-15 20:45:36', 2),
(16, 'Wstawienie zamknięcia rewizyjnego na magnesach', '40,00 zł/kpl', '2016-12-15 20:45:50', '2016-12-15 20:45:50', 2),
(17, 'Układanie mozaiki w pasach szer. do 10 cm', '85,00 zł/mb', '2016-12-15 20:46:03', '2016-12-15 20:46:03', 2),
(18, 'Układanie mozaiki szklanej lub marmurowej np. ściany pow. łukowe', '80,00 zł/m2', '2016-12-15 20:46:15', '2016-12-15 20:46:15', 2),
(19, 'Układanie mozaiki szklanej lub marmurowej np. ściany pow. Płaskie', '70,00 zł/m2', '2016-12-15 20:46:30', '2016-12-15 20:46:30', 2),
(20, 'Instalacje wod - kan', '100-140 zł/od pkt', '2016-12-15 20:47:10', '2016-12-15 20:47:10', 3),
(21, 'Instalacja centralnego ogrzewania', '100-140 zł/od pkt', '2016-12-15 20:47:28', '2016-12-15 20:47:28', 3),
(22, 'Demontaż starych punktów hydraulicznych,(wanna, umywalka) itp.', '60,00 zł/szt', '2016-12-15 20:47:45', '2016-12-15 20:47:45', 3),
(23, 'Demontaż starej instalacji hydraulicznej metalowej z odkuciem w ścianach', '30,00 zł/mb', '2016-12-15 20:48:04', '2016-12-15 20:48:04', 3),
(24, 'Obudowa wanny klasycznej', '150,00 zł/szt', '2016-12-15 20:48:16', '2016-12-15 20:48:16', 3),
(25, 'Obudowa brodzika', '130,00 zł/szt', '2016-12-15 20:48:27', '2016-12-15 20:48:27', 3),
(26, 'Obudowa wanny półokrągłej', '250,00 zł/szt', '2016-12-15 20:48:39', '2016-12-15 20:48:39', 3),
(27, 'Montaż kratek wentylacyjnych', '20,00 zł/szt', '2016-12-15 20:48:50', '2016-12-15 20:48:50', 3),
(28, 'Montaż drzwi rewizyjnych', '30,00 zł/szt', '2016-12-15 20:49:04', '2016-12-15 20:49:04', 3),
(29, 'Montaż umywalki', '50,00 zł/szt', '2016-12-15 20:49:17', '2016-12-15 20:49:17', 3),
(30, 'Montaż muszli klozetowej', '50,00 zł/szt', '2016-12-15 20:49:40', '2016-12-15 20:49:40', 3),
(31, 'Montaż baterii łaz-kuch', '30,00 zł/szt', '2016-12-15 20:49:53', '2016-12-15 20:49:53', 3),
(32, 'Montaż panelu prysznicowego', '50,00 zł/szt', '2016-12-15 20:50:05', '2016-12-15 20:50:05', 3),
(33, 'Montaż brodzika wraz z kabiną', '230,00 zł/szt', '2016-12-15 20:50:18', '2016-12-15 20:50:18', 3),
(34, 'Wykonanie podejścia wodno - kanalizacyjnego plastik', '140,00 zł/pkt', '2016-12-15 20:50:32', '2016-12-15 20:50:32', 3),
(35, 'Wykonanie podejścia wodno - kanalizacyjnego miedź', '150,00 zł/pkt', '2016-12-15 20:50:48', '2016-12-15 20:50:48', 3),
(36, 'Wykonanie podejścia do grzejnika c.o. (plastik)', '80,00 zł/pkt', '2016-12-15 20:51:05', '2016-12-15 20:51:05', 3),
(37, 'Wykonanie podejścia do grzejnika (miedź)', '100,00 zł/pkt', '2016-12-15 20:51:21', '2016-12-15 20:51:21', 3),
(38, 'Montaż szafki i rozdzielacza do ogrzewania centralnego', '200,00 zł/szt', '2016-12-15 20:51:37', '2016-12-15 20:51:37', 3),
(39, 'Demontaż grzejnika (c.o.)', '30,00 zł/szt', '2016-12-15 20:51:49', '2016-12-15 20:51:49', 3),
(40, 'Zawieszenie grzejnika (c.o.)', '45,00 zł/szt', '2016-12-15 20:52:04', '2016-12-15 20:52:04', 3),
(41, 'Montaż geberitu wraz z wkuciem w ścianę', '350,00 zł/pkt', '2016-12-15 20:52:17', '2016-12-15 20:52:17', 3),
(42, 'Podłączenie sedesu podwieszanego', '130,00 zł/pkt', '2016-12-15 20:52:34', '2016-12-15 20:52:34', 3),
(43, 'Podłączenie wanny z obudową', '200,00 zł/pkt', '2016-12-15 20:52:50', '2016-12-15 20:52:50', 3),
(44, 'Półeczki, występy, ościeża', '70,00 zł/m2', '2016-12-15 20:53:14', '2016-12-15 20:53:14', 3),
(45, 'Montaż geberitu wraz z zabudową k.g.', '300,00 zł/kpl', '2016-12-15 20:53:27', '2016-12-15 20:53:27', 3),
(46, 'Malowanie (dwukrotne) farbami emulsyjnymi(Biała-kolor) bez materiału', '8,00 zł/m2', '2016-12-15 20:54:05', '2016-12-15 20:54:05', 4),
(47, 'Malowanie farbą na biało grzejników do wysokości 60 cm, 1 żeberko bez materiału', '5,00 zł/żebro', '2016-12-15 20:54:20', '2016-12-15 20:54:20', 4),
(48, 'Malowanie rur wod-kan, lub c.o. na biało do przekroju 50 mm. bez materiału', '8,00 zł/mb', '2016-12-15 20:54:33', '2016-12-15 20:54:33', 4),
(49, 'Tapetowanie ścian', '9,00 zł/m2', '2016-12-15 20:54:45', '2016-12-15 20:54:45', 4),
(50, 'Tapetowanie sufitów', '15,00 zł/m2', '2016-12-15 20:55:00', '2016-12-15 20:55:00', 4),
(51, 'Gruntowanie środkiem uni grunt', '2,00 zł/m2', '2016-12-15 20:55:12', '2016-12-15 20:55:12', 4),
(52, 'Skrobanie i mycie ścian z farby klejowej, pod malowanie', '4,00 zł/m2', '2016-12-15 20:55:26', '2016-12-15 20:55:26', 4),
(53, 'Lakierowanie (farby olejne)', '8,00 zł/m2', '2016-12-15 20:55:38', '2016-12-15 20:55:38', 4),
(54, 'Przygotowanie powierzchni do prac mal-tap', '4,00 zł/m2', '2016-12-15 20:55:51', '2016-12-15 20:55:51', 4),
(55, 'Zrywanie starych tapet', '3,00 zł/m2', '2016-12-15 20:56:05', '2016-12-15 20:56:05', 4),
(56, 'Malowanie na biało farbą balustrad lub poręczy balkonowych, bez materiału', '35,00 zł/m2', '2016-12-15 20:56:21', '2016-12-15 20:56:21', 4),
(57, 'Malowanie okien zespolonych', '65,00 zł/m2', '2016-12-15 20:56:36', '2016-12-15 20:56:36', 4),
(58, 'Zabezpieczenie folią lub wystawienie do pomieszczeń sąsiednich mebli znajdujących się w pomieszczeniu malowanym,(nakład na m2 podłogi) z kosztem folii i taśmy', '6,00 zł/m2', '2016-12-15 20:56:54', '2016-12-15 20:56:54', 4),
(59, 'Malowanie otworów okiennych i drzwiowych, liczonych pojedynczo tj. dwustronnie, w świetle ościeżnic, z przetarciem papierem ściernym i drobnymi reperacjami oraz z kosztem 2-krotnego malowanie na biało bez materiału', '35,00 zł/m2', '2016-12-15 20:57:07', '2016-12-15 20:57:07', 4),
(60, 'Impregnacja drewna 3 krotne nasycenie pędzlem', '9,00 zł/m2', '2016-12-15 20:57:20', '2017-04-03 18:47:26', 4),
(61, 'Wykonanie gładzi gipsowych - dwukrotne przetarcie gipsem ze szlifowaniem bez materiału', '7,00 zł/m2', '2016-12-15 20:57:43', '2016-12-15 20:57:43', 5),
(62, 'Montaż ścianek działowych z płyt k.g-.z wygłuszeniem wełną mineralną', '37,00 zł/m2', '2016-12-15 20:58:10', '2016-12-15 20:58:10', 5),
(63, 'Montaż płyt gipsowych na kleju', '20,00 zł/m2', '2016-12-15 20:58:28', '2016-12-15 20:58:28', 5),
(64, 'Dociepalanie poddasza(wełna+folia)+płyta kg na stelaż', '43,00 zł/m2', '2016-12-15 20:58:46', '2016-12-15 20:58:46', 5),
(65, 'Montaż płyt kg na stelażu bez materiału', '35,00 zł/m2', '2016-12-15 20:59:09', '2016-12-15 20:59:09', 5),
(66, 'Montaż płyt k,g na stelażu + ocieplenie styrop-wełna', '42,00 zł/m2', '2016-12-15 20:59:29', '2016-12-15 20:59:29', 5),
(67, 'Zabudowy z płyt K.G.', '50,00 zł/mb', '2016-12-15 20:59:44', '2016-12-15 20:59:44', 5),
(68, 'Montaż narożników aluminiowych bez materiału', '7,00 zł/mb', '2016-12-15 21:00:00', '2016-12-15 21:00:00', 5),
(69, 'Montaż sztukaterii', '12,00 zł/mb', '2016-12-15 21:00:16', '2016-12-15 21:00:16', 5),
(70, 'Montaż sufitów podwieszanych na stelażu bez materiału', '35,00 zł/m2', '2016-12-15 21:00:30', '2016-12-15 21:00:30', 5),
(71, 'Montaż sufitów podwieszanych (wielopoziomowe)', '75,00 zł/m2', '2016-12-15 21:00:49', '2016-12-15 21:00:49', 5),
(72, 'Zabudowy nietypowe z kształtowników metalowych i płyt miejscowe obniżenia sufitów obudowy rur pułki o zarysach prostolinijnych', '58,00 zł/m2', '2016-12-15 21:01:02', '2016-12-15 21:01:02', 5),
(73, 'Zabudowy nietypowe z kształtowników metalowych i płyt miejscowe obniżenia sufitów obudowy rur pułki o zarysach elementami łukowymi', '70,00 zł/m2', '2016-12-15 21:01:13', '2016-12-15 21:01:13', 5),
(74, 'Wszpachlowanie siatki zbrojącej na pęknięciach i zarysowaniach', '6,00 zł/mb', '2016-12-15 21:01:25', '2016-12-15 21:01:25', 5),
(75, 'Szpachlowanie łączeń płyt k.g.', '5,00 zł/m2', '2016-12-15 21:01:38', '2016-12-15 21:01:38', 5),
(76, 'Wykonanie szachtu z płyty kg', '40,00 zł/mb', '2016-12-15 21:01:56', '2016-12-15 21:01:56', 5),
(77, 'Montaż drzwi wewnętrznych', '150,00 zł/szt', '2016-12-15 21:02:31', '2016-12-15 21:02:31', 6),
(78, 'Montaż drzwi zewnętrznych', '230,00 zł/szt', '2016-12-15 21:02:44', '2016-12-15 21:02:44', 6),
(79, 'Skuwanie tynku', '12,00-15,00 zł/m2', '2016-12-15 21:02:55', '2016-12-15 21:02:55', 6),
(80, 'Obróbka otworów okiennych', '20,00 zł/mb', '2016-12-15 21:03:08', '2016-12-15 21:03:08', 6),
(81, 'Tynki akrylowe-mineralne', '25,00 zł/m2', '2016-12-15 21:03:20', '2016-12-15 21:03:20', 6),
(82, 'Tynki ozdobne', '35,00 zł/m2', '2016-12-15 21:03:32', '2016-12-15 21:03:32', 6),
(83, 'Tynkowanie tradycyjne', '15,00 zł/m2', '2016-12-15 21:03:44', '2016-12-15 21:03:44', 6),
(84, 'Murowanie z cegły', '30,00 zł/m2', '2016-12-15 21:03:57', '2016-12-15 21:03:57', 6),
(85, 'Ościeżnica (demontaż-montaż)', '100 zł/szt', '2016-12-15 21:04:28', '2016-12-15 21:04:28', 6),
(86, 'Dwustronne obrobienie glifów przy drzwiach (szer. od 10cm)', '40,00 zł/m2', '2016-12-15 21:04:55', '2016-12-15 21:04:55', 6),
(87, 'Montaż ścianki działowej z ytongu', '22,00 zł/m2', '2016-12-15 21:05:10', '2016-12-15 21:05:10', 6),
(88, 'Montaż parapetów wewnętrznych', '30,00 zł/mb', '2016-12-15 21:05:23', '2016-12-15 21:05:23', 6),
(89, 'Docieplanie ścian wewnątrz bez materiału', '20,00 zł/m2', '2016-12-15 21:05:38', '2016-12-15 21:05:38', 6),
(90, 'Wylewki samopoziomujące', '13,00 zł/m2', '2016-12-15 21:05:54', '2016-12-15 21:05:54', 6),
(91, 'Wylewki tradycyjne do 1 cmm', '15,00 zł/m2', '2016-12-15 21:06:18', '2016-12-15 21:06:18', 6),
(92, 'Układanie cegły klinkierowej', '35,00 zł/m2', '2016-12-15 21:06:40', '2016-12-15 21:06:40', 6),
(93, 'Montaż luksferów', '70,00 zł/m2', '2016-12-15 21:06:52', '2016-12-15 21:06:52', 6),
(94, 'Montaż futryn drewnianych', '60,00 zł/szt', '2016-12-15 21:07:05', '2016-12-15 21:07:05', 6),
(95, 'Wyburzanie ścian z cegły do gr. 20 cm', '95,00 -120 zł/m2', '2016-12-15 21:07:21', '2016-12-15 21:07:21', 6),
(96, 'Wymurowanie stopnia', '40,00 zł/mb', '2016-12-15 21:07:33', '2016-12-15 21:07:33', 6),
(97, 'Skuwanie starego tynku lub płytek z wyniesieniem bez kontenera', '25,00 zł/m2', '2016-12-15 21:07:48', '2016-12-15 21:07:48', 6),
(98, 'Położnie wykładziny dywanowej (bez kleju)', '9,00 zł/m2', '2016-12-15 21:08:32', '2016-12-15 21:08:32', 7),
(99, 'Położenie wykładziny dywanowej (z klejem)', '12,00 zł/m2', '2016-12-15 21:08:48', '2016-12-15 21:08:48', 7),
(100, 'Listwy wykończeniowe ościeżnic (montaż)', '30,00 zł/szt', '2016-12-15 21:09:05', '2016-12-15 21:09:05', 7),
(101, 'Listwy wykończeniowe podsufitowe (montaż)', '5,00 zł/mb', '2016-12-15 21:09:27', '2016-12-15 21:09:27', 7),
(102, 'Listwy wykończeniowe przypodłogowe (montaż)', '6,00 zł/mb', '2016-12-15 21:09:53', '2016-12-15 21:09:53', 7),
(103, 'Montaż paneli podłogowych', '15,00 zł/m2', '2016-12-15 21:10:06', '2016-12-15 21:10:06', 7),
(104, 'Montaż paneli ściennych', '22,00 zł/m2', '2016-12-15 21:10:20', '2016-12-15 21:10:20', 7),
(105, 'Zrywanie płytek PCV', '5,00 zł/m2', '2016-12-15 21:10:32', '2016-12-15 21:10:32', 7),
(106, 'Podcinanie drzwi', '12,00 zł/szt', '2016-12-15 21:10:46', '2016-12-15 21:10:46', 7),
(107, 'Montaż progów', '10,00 zł/szt', '2016-12-15 21:10:59', '2016-12-15 21:10:59', 7),
(108, 'Zrywanie starych wykładzin', '5,00 zł/m2', '2016-12-15 21:11:16', '2016-12-15 21:11:16', 7),
(109, 'Ściąganie parkietu starego', '7,00 zł/m2', '2016-12-15 21:11:33', '2016-12-15 21:11:33', 7),
(110, 'Obsadzanie parapetów na piankę z reperacjami', '60,00 zł/mb', '2016-12-15 21:11:48', '2016-12-15 21:11:48', 7),
(111, 'Wykonanie rusztu z listew i montaż boazerii z drewna (ściana)', '25,00 zł/m2', '2016-12-15 21:12:02', '2016-12-15 21:12:02', 7),
(112, 'Wykonanie rusztu z listew i montaż boazerii z drewna (sufit)', '32,00 zł/m2', '2016-12-15 21:12:15', '2016-12-15 21:12:15', 7),
(113, 'Szlifowanie boazerii+lakierowanie (1 krotne)', '6,00 zł/m2', '2016-12-15 21:12:28', '2016-12-15 21:12:28', 7),
(114, 'Wstawienie listew dylatacyjnych', '12,00 zł/mb', '2016-12-15 21:12:39', '2016-12-15 21:12:39', 7),
(115, 'Położenie wykładziny typ (PCV)', '15,00 zł/m2', '2016-12-15 21:12:51', '2016-12-15 21:12:51', 7),
(116, 'Montaż podłogi z płyty osb', '48,00 zł/m2', '2016-12-15 21:13:04', '2016-12-15 21:13:04', 7),
(117, 'Konstrukcja stropu+płyta osb', '120,00 zł/m2', '2016-12-15 21:13:18', '2016-12-15 21:13:18', 7),
(118, 'Montaż podłogi deska', '65,00 zł/m2', '2016-12-15 21:13:34', '2016-12-15 21:13:34', 7),
(119, 'Instalacje elektryczne', '35,00 zł/od pkt', '2016-12-15 21:14:18', '2016-12-15 21:14:18', 8),
(120, 'Instalacja elektryczna oświetlenia halogenowego', '20,00 zł/pkt', '2016-12-15 21:14:36', '2016-12-15 21:14:36', 8),
(121, 'Położenie kabla elektrycznego', '15,00 zł/mb', '2016-12-15 21:14:50', '2016-12-15 21:14:50', 8),
(122, 'Punkt oświetlenia górnego', '30,00 zł/pkt', '2016-12-15 21:15:03', '2016-12-15 21:15:03', 8),
(123, 'Punkt gniazda siłowego', '90,00 zł/pkt', '2016-12-15 21:15:16', '2016-12-15 21:15:16', 8),
(124, 'Punkt gniazda T.V.', '60,00 zł/pkt', '2016-12-15 21:15:33', '2016-12-15 21:15:33', 8),
(125, 'Punkt gniazda telefonicznego', '30,00 zł/pkt', '2016-12-15 21:15:46', '2016-12-15 21:15:46', 8),
(126, 'Punkt akustyczny', '40,00 zł/pkt', '2016-12-15 21:16:00', '2016-12-15 21:16:00', 8),
(127, 'Montaż wentylatorów', '50,00 zł/szt', '2016-12-15 21:16:14', '2016-12-15 21:16:14', 8),
(128, 'Montaż wyłączników', '5,00 zł/szt', '2016-12-15 21:16:29', '2016-12-15 21:16:29', 8),
(129, 'Montaż gniazd elektrycznych-antenowych-telefonicznych', '7,00 zł/szt', '2016-12-15 21:16:44', '2016-12-15 21:16:44', 8),
(130, 'Rozeta rozdzielacza punktu elektrycznego', '40,00 zł/szt', '2016-12-15 21:16:58', '2016-12-15 21:16:58', 8),
(131, 'Wykucie bruzdy pod kabel (cegła)', '7,00 zł/mb', '2016-12-15 21:17:11', '2016-12-15 21:17:11', 8),
(132, 'Wykucie bruzdy pod kabel (beton)', '10,00 zł/mb', '2016-12-15 21:17:24', '2016-12-15 21:17:24', 8),
(133, 'Wykucie gniazda pod puszkę (beton)', '10,00 zł/szt', '2016-12-15 21:17:40', '2016-12-15 21:17:40', 8),
(134, 'Wykucie gniazda pod puszkę (cegła)', '7,00 zł/szt', '2016-12-15 21:18:04', '2016-12-15 21:18:04', 8),
(135, 'Wykonanie bruzd w tynku i ich zatarcie', '13,00 zł/mb', '2016-12-15 21:18:23', '2016-12-15 21:18:23', 8),
(136, 'Wymiana żyrandoli, kinkietów lub innych punktów świetlnych bez przerabiania instalacji i nawiercania otworów pod kołki rozporowe (osprzęt klienta)', '25,00 zł./szt', '2016-12-15 21:18:58', '2016-12-15 21:18:58', 9),
(137, 'Wymiana klamek i szyldów okiennych lub drzwiowych, bez konieczności rozwiercania drzwi, przerabiania zamków lub dłutowania wcięć na powyższe.Bez kosztów w/w okuć i ich transportu', '28,00 zł/szt', '2016-12-15 21:19:13', '2016-12-15 21:19:13', 9),
(138, 'Wymiana lub montaż karniszy (osprzęt klienta)', '25,00 zł/szt', '2016-12-15 21:19:27', '2016-12-15 21:19:27', 9),
(139, 'Montaż dodatków łazienkowych np. wieszak na ręczniki mydelniczka', '15,00 zł/szt', '2016-12-15 21:19:44', '2016-12-15 21:19:44', 9),
(140, 'Montaż luster i suszarek łazienkowych', '35,00 zł/szt', '2016-12-15 21:19:58', '2016-12-15 21:19:58', 9),
(141, 'Wieszanie obrazów lub pułek, inne', '10,00 zł/szt', '2016-12-15 21:20:24', '2016-12-15 21:20:24', 9),
(142, 'Wykonanie izolacji ( folia w płynie )', '6,00 zł/m2', '2016-12-15 21:20:39', '2016-12-15 21:20:39', 9),
(143, 'Wykonanie izolacji (przeciw wodna - bitumiczna)', '11,00 zł/m2', '2016-12-15 21:20:52', '2016-12-15 21:20:52', 9),
(144, 'Silikonowanie', '5,00 zł/mb', '2016-12-15 21:21:06', '2016-12-15 21:21:06', 9),
(145, 'Dokonanie oględzin, pomiarów i wyceny wstępnej', '30,00 zł', '2016-12-15 21:21:29', '2016-12-15 21:21:29', 10),
(146, 'Stawka roboczogodzina za prace niewymierne', '15,00 zł/godz', '2016-12-15 21:21:46', '2016-12-15 21:21:46', 10);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `testals`
--

CREATE TABLE `testals` (
  `id` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `testals`
--

INSERT INTO `testals` (`id`, `user`, `img`, `text`, `createdAt`, `updatedAt`) VALUES
(1, 'mgr inż. Jan Badzio', 'BypT9YeNg.jpg', '"...Wykonawca wysiązał się bardzo dobrze z przyjętych zadań, dotrzymując terminów realizacji zapewniając bardzo dobrą jakość robót..."', '2016-12-15 21:27:33', '2016-12-15 21:27:33'),
(2, 'Maciej Kasprzycki', 'BylSjYxNe.jpg', '"... Wszelkie roboty zostały wykonane zgodnie z moimi życzeniami bez potrzeby szczególnego nadzoru..."', '2016-12-15 21:29:27', '2016-12-15 21:29:27'),
(3, 'mgr Janina Filar', 'SJVujKxNx.jpg', '"... Prace wykonane zgrabnie, terminowo i profesjonalnie..."', '2016-12-15 21:30:19', '2016-12-15 21:30:19'),
(4, 'Władysław Filar', 'SJgAiKeEg.jpg', '"... W związku z bardzo dobrą jakością wykonywanych prac mogę polecić w/w jako sprawdzonego i wiarygodnego wykonawcę..."', '2016-12-15 21:31:51', '2016-12-15 21:31:51'),
(5, 'Wojciech Lenartowicz', 'rkkH2FlVl.jpg', '..." mogę polecić firmę SEBAYBUD wszystkim jako firmę solidną, rzetelną, oraz przykładającą dużą wagę do wykonywanych robót..."', '2016-12-15 21:33:43', '2016-12-15 21:33:43'),
(6, 'Wioletta Konieczna', 'r1wo2tlVg.jpg', '"... polecam firmę SEBAYBUD jako godną zaufania, świadczącą rzetelnie i fachowo swoje usługi..."', '2016-12-15 21:35:26', '2016-12-15 21:35:26'),
(7, 'Cukiernia Samanta', 'r1rMTKxNe.jpg', '"... Polecam Firmę SEBAYBUD ze względu na profesjonalne podejście do pracy solidność, terminowość oraz punktualność..."', '2016-12-15 21:37:17', '2016-12-15 21:37:17'),
(8, 'FHU HIGHLANDER', 'B11_atgNg.jpg', '"... to rzetelny zespół pracowników, wykonujących profesjonalnie i z pomysłem powierzone im prace..."', '2016-12-15 21:38:47', '2016-12-15 21:38:47');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'sebaybud', '47bce5c74f589f4867dbd57e9ca9f808', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pricecategories`
--
ALTER TABLE `pricecategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `testals`
--
ALTER TABLE `testals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT dla tabeli `pricecategories`
--
ALTER TABLE `pricecategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT dla tabeli `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;
--
-- AUTO_INCREMENT dla tabeli `testals`
--
ALTER TABLE `testals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `prices`
--
ALTER TABLE `prices`
  ADD CONSTRAINT `prices_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `pricecategories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
