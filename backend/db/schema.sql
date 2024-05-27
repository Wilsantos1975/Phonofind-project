DROP TABLE IF EXISTS vynils;




CREATE TABLE vynils (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  artist TEXT NOT NULL,
  release_year INTEGER NOT NULL,
  genre VARCHAR(255) NOT NULL,
  price DECIMAL(5, 2) NOT NULL,
  condition TEXT NOT NULL,
  description TEXT NOT NULL,
);

