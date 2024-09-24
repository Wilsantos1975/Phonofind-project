// query functions for vinyls table in vinyl_collection database

const { get } = require("../app");
const db = require("../db/index");

// get all albums
getAllAlbums = async () => {
  try {
    const allAlbums = await db.any(`SELECT 
    a.album_id,
    a.album_title,
    a.album_price,
    a.album_release_year,
    a.album_genre,
    a.album_condition,
    ar.artist_name
FROM 
    albums a
JOIN 
    artist ar ON a.artist_id = ar.id`);
    return allAlbums;
  } catch (error) {
    return error;
  }
};

// get a single Album by id
getSingleAlbum = async (id) => {
  try {
    const singleAlbum = await db.one("SELECT * FROM albums WHERE id = $1", id);
    console.log(singleAlbum);
    return singleAlbum;
  } catch (error) {
    return error;
  }
};

// //post a new Album
// postNewAlbum = async (req, res) => {
//   try {
//     const {
//       artist,
//       album,
//       release_year,
//       genre,
//       prize,
//       condition,
//       description,
//     } = req.body;
//     const newAlbum= await db.one(
//       "INSERT INTO vynils (artist, album, release_year, genre, prize, condition, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
//       [artist, album, release_year, genre, prize, condition, description]
//     );
//     return newAlbum;
//   } catch (error) {
//     return error;
//   }
// };

// //update album by id
// updateAlbum = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       artist,
//       album,
//       release_year,
//       genre,
//       prize,
//       condition,
//       description,
//     } = req.body;

//     const updatedAlbum = await db.one(
//       `
//         UPDATE vynils
//         SET artist = $1, album = $2, release_year = $3, genre = $4, prize = $5, condition = $6, description = $7
//         WHERE id = $8
//         RETURNING *
//       `,
//       [artist, album, release_year, genre, prize, condition, description, id]
//     );

//     return updatedAlbum;
//   } catch (error) {
//     return error;
//   }
// };


// //delete album by id
// deleteAlbum= async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedAlbum= await db.one(
//       "DELETE FROM vynils WHERE id = $1 RETURNING *",
//       Number(id)
//     );
//     return deletedAlbum;
//   } catch (error) {
//     return error;
//   }
// };

module.exports = {
  getAllAlbums,
  getSingleAlbum,
  // postNewAlbum,
  // updateAlbum,
  // deleteAlbum,
};
