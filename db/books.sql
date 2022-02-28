DROP TABLE IF EXISTS Books;


CREATE TABLE Books (
	id SERIAL PRIMARY KEY,
	name 		TEXT,
	author 		TEXT,
	description 	TEXT,
	cover		BYTEA
);
