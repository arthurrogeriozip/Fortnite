CREATE DATABASE Fortnite;

USE Fortnite;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE pontuacao (
id INT PRIMARY KEY AUTO_INCREMENT,
acertos INT,
fk_usuario INT,
CONSTRAINT fk_usuario_p FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE errada (
id INT PRIMARY KEY AUTO_INCREMENT,
questao INT,
fk_usuario INT,
CONSTRAINT fk_usuario_e FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

SELECT * FROM usuario;

