DROP TABLE IF EXISTS Books;
DROP TABLE IF EXISTS Genre;

CREATE TABLE Genre (
	id 			SERIAL,
	name		TEXT UNIQUE NOT NULL,
	fiction BOOLEAN NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE Books (
	id 						SERIAL,
	name 					TEXT NOT NULL,
	author 				TEXT NOT NULL,
	description 	TEXT,
	genre					SERIAl
	PRIMARY KEY(id),
	FOREIGN KEY(genre) REFERENCES Genre(id)
	--cover					BYTEA
);



--
-- Insert Genre
--
INSERT INTO Genre
VALUES 	('Fantasy', TRUE),
				('Drama', TRUE),
				('Self-Help', FALSE),
				('Science', FALSE),
				('Philosophy', FALSE),
				('Biography', FALSE),
				('Novell', TRUE);


---
--- Insert books
---

INSERT INTO Books
Values 	('Dune', 'Frank Herbert', 'Fantasy'),
				('Dune: Messiah', 'Frank Herbert', 'Fantasy'),
				('Dune: Children of Dune', 'Frank Herbert', 'Fantasy'),
				('Simarillion', 'J.R.R Tolkien', 'Fantasy'),
				('Deep Work', 'Cal Newport', 'Self-Help'),
				('Our Mathematical Universe', 'Max Tegmark', 'Science'),
				('Life 3.0: Being Human in the Age of Artificial Intelligence', 'Max Tegmark', 'Science'),
				('A Brief History of Time', 'Stephen Hawking', 'Science'),
				('Black Holes and Baby Universes and Other Essays', 'Stephen Hawking', 'Science'),
				('The Grand Design', 'Stephen Hawking', 'Science'),
				('Superintelligence: Paths, Dangers, Strategies', 'Nick Bostrom', 'Science'),
				('The Help', 'Kathryn Stockett', 'Novell'),
				('Jag ser allt du gör', 'Annika Norlin', 'Novell'),
				('Till häst genom Västerbotten', 'Sven Björklund, Olof Wretling', 'Novell'),
				('Kallocain', 'Karin Boye', 'Novell'),
				('Musikanternas uttåg', 'P.O Enquist', 'Novell'),
				('Kapten Nemos Bibliotek', 'P.O Enquist', 'Novell'),
				('Led Zeppelin: When giants walked the earth', 'Mick Wall', 'Biography');
/*
-- FANTASY --

DUNE
DUNE: MESSIAH
DUNE: CHILDREN OF DUNE
	FRANK HERBERT

SIMARILLION
	J.R.R Tolkien

The Help
	Kathryn Stockett

Jag ser allt du gör
	Annika Norlin

Till häst genom Västerbotten
	Sven Björklund, Olof Wretling

Kallocain
	Karin Boye

Musikanternas Uttåg
Kapten Nemos Bibliotek
	P.O. Enquvist

-- SCIENCE --
DEEP WORK
	CAL NEWPORT

Our Mathematical Universe
Life 3.0: Being Human in the Age of Artificial Intelligence
	Max Tegmark

A Brief History of Time
Black Holes and Baby Universes and Other Essays
The Grand Design
	Stephen Hawking

Superintelligence: Paths, Dangers, Strategies
	Nick Bostrom

-- BIOGRAPHY --
Amy Winehouse
Foo Fighters
Pink Floyd
Led Zeppelin			X
Motörhead
Anthony Keidis

*/
