DROP TABLE IF EXISTS album;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS vinyls;
DROP TABLE IF EXISTS artist;



CREATE TABLE artist (
  id SERIAL PRIMARY KEY,
  artist_name text,
  artist_genre text, 
  artist_description text
);

CREATE TABLE albums (
  album_id SERIAL PRIMARY KEY,
  album_title TEXT NOT NULL,
  album_release_year INTEGER NOT NULL,
  album_genre VARCHAR(255) NOT NULL,
  album_price DECIMAL(5, 2) NOT NULL,
  album_condition TEXT NOT NULL,
  album_description TEXT NOT NULL,
  artist_id INT REFERENCES artist(id) ON DELETE CASCADE
  
  -- album_songs [],
);


-- CREATE TABLE Artist (
--   artist_id INT PRIMARY KEY AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL UNIQUE,
--   genre VARCHAR(100)
-- );

-- -- Create the Album table
-- CREATE TABLE Album (
--   album_id INT PRIMARY KEY AUTO_INCREMENT,
--   title VARCHAR(255) NOT NULL,
--   release_year INT,
--   artist_id INT NOT NULL,
--   FOREIGN KEY (artist_id) REFERENCES Artist(artist_id)
-- );
-- CREATE TABLE song (
--   song_id SERIAL PRIMARY KEY,
--   title TEXT NOT NULL UNIQUE,
--   artist TEXT NOT NULL,
--   release_year INTEGER NOT NULL,
--   genre VARCHAR(255) NOT NULL,
--   price DECIMAL(5, 2) NOT NULL,
--   condition TEXT NOT NULL,
--   description TEXT NOT NULL,
-- );

-- Drop existing tables (if they exist)
-- DROP TABLE IF EXISTS artist;
-- DROP TABLE IF EXISTS album;

-- -- Create separate Artist and Album tables

-- -- Artist table
-- CREATE TABLE artist (
--   artist_id SERIAL PRIMARY KEY,
--   artist_name VARCHAR(255) NOT NULL UNIQUE,  -- Use VARCHAR for name
--   artist_genre VARCHAR(100)
-- );

-- -- Album table
-- CREATE TABLE album (
--   album_id SERIAL PRIMARY KEY,
--   album_title TEXT NOT NULL UNIQUE,
--   album_artist_id INT NOT NULL,  -- Foreign key referencing Artist
--   album_release_year INTEGER NOT NULL,
--   album_genre VARCHAR(255) NOT NULL,
--   album_price DECIMAL(5, 2) NOT NULL,
--   album_condition TEXT NOT NULL,
--   album_description TEXT NOT NULL,
--   FOREIGN KEY (album_artist_id) REFERENCES artist(artist_id)  -- Corrected foreign key constraint
--   -- album_songs [],  -- Consider a separate Songs table if needed
-- );
