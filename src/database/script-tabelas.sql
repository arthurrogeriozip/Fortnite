CREATE DATABASE Fortnite;

USE Fortnite;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL
);

create table quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
	fk_personagem INT,
	acertos INT,
	tempo TIME,
	CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	CONSTRAINT fk_personagem FOREIGN KEY (fk_personagem) REFERENCES personagem(id),
);

CREATE TABLE personagem (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	cargo VARCHAR(50)
);