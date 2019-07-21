-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Jul-2019 às 15:50
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `qrcode`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `atributos_tipo_evento`
--

CREATE TABLE `atributos_tipo_evento` (
  `id` int(11) NOT NULL,
  `campo_atributo` varchar(45) DEFAULT NULL,
  `input_atributo` varchar(45) DEFAULT NULL,
  `id_tipo_evento_principal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `atributos_tipo_evento`
--

INSERT INTO `atributos_tipo_evento` (`id`, `campo_atributo`, `input_atributo`, `id_tipo_evento_principal`) VALUES
(4, 'anamisene nutricional', 'teste 1', 23),
(5, 'medidas de peso', 'teste 2', 23),
(6, 'IMC', 'teste 3', 23),
(7, 'Redes', 'teste 1.1', 24),
(8, 'Analise de sistemas', 'teste 1.2', 24),
(9, 'Web master', 'teste 1.3', 24);

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_principal`
--

CREATE TABLE `evento_principal` (
  `id` int(11) NOT NULL,
  `data_inicio_evento` date DEFAULT NULL,
  `data_final_evento` date DEFAULT NULL,
  `nome_evento` varchar(45) DEFAULT NULL,
  `local_evento` varchar(45) DEFAULT NULL,
  `token` varchar(45) DEFAULT NULL,
  `id_tipo_evento` int(11) DEFAULT NULL,
  `codigo_cliente` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `evento_principal`
--

INSERT INTO `evento_principal` (`id`, `data_inicio_evento`, `data_final_evento`, `nome_evento`, `local_evento`, `token`, `id_tipo_evento`, `codigo_cliente`) VALUES
(1, '2019-07-21', '2019-07-22', 'Nutricao hoje', 'Canabrava', '43oxhpyxnw98hvo930bo2u', 23, '001'),
(2, '2019-07-22', '2019-07-24', 'Informatica Hoje', 'Canavabra', 'onr7i4d74p752plktt8qa', 24, '001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_evento_principal`
--

CREATE TABLE `tipo_evento_principal` (
  `id` int(11) NOT NULL,
  `codigo_cliente` varchar(45) DEFAULT NULL,
  `descricao_evento` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tipo_evento_principal`
--

INSERT INTO `tipo_evento_principal` (`id`, `codigo_cliente`, `descricao_evento`) VALUES
(23, '001', 'nutricao'),
(24, '002', 'Informatica');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `atributos_tipo_evento`
--
ALTER TABLE `atributos_tipo_evento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_id_tipo_evento_atributo` (`id_tipo_evento_principal`);

--
-- Índices para tabela `evento_principal`
--
ALTER TABLE `evento_principal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_id_tipo_evento_evento_principal` (`id_tipo_evento`);

--
-- Índices para tabela `tipo_evento_principal`
--
ALTER TABLE `tipo_evento_principal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `atributos_tipo_evento`
--
ALTER TABLE `atributos_tipo_evento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `evento_principal`
--
ALTER TABLE `evento_principal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tipo_evento_principal`
--
ALTER TABLE `tipo_evento_principal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `atributos_tipo_evento`
--
ALTER TABLE `atributos_tipo_evento`
  ADD CONSTRAINT `FK_id_tipo_evento_atributo` FOREIGN KEY (`id_tipo_evento_principal`) REFERENCES `tipo_evento_principal` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `evento_principal`
--
ALTER TABLE `evento_principal`
  ADD CONSTRAINT `FK_id_tipo_evento_evento_principal` FOREIGN KEY (`id_tipo_evento`) REFERENCES `tipo_evento_principal` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
