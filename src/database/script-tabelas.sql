CREATE DATABASE Fortnite;

USE Fortnite;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE questao (
    idQuestao INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(200),
    alternativaCorreta CHAR(1)
);

CREATE TABLE jogada (
    idJogada INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkQuestao INT,
    fkJogada INT,
    acertou TINYINT(1),
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fkQuestao FOREIGN KEY (fkQuestao) REFERENCES questao(idQuestao),
    CONSTRAINT fkJogada FOREIGN KEY (fkJogada) REFERENCES jogada(idJogada)
);

INSERT INTO questao (pergunta, alternativaCorreta)VALUES
('Qual é o modo de jogo mais famoso de Fortnite?','D'),
('Qual é o nome da moeda usada dentro do Fortnite?','C'),
('Qual é o nome do ônibus que leva os jogadores até a ilha?','A'),
('Qual empresa desenvolveu Fortnite?','A'),
('Qual destes personagens já teve colaboração com Fortnite?','C'),
('O que acontece quando um jogador é eliminado no modo Battle Royale?','B'),
('Qual é a raridade mais alta dos itens em Fortnite?','D'),
('O que é a Tempestade no Fortnite?','C'),
('Qual destes materiais NÃO é usado para construir no Fortnite?','D'),
('Qual a cidade mais famosa no Fortnite?','B');