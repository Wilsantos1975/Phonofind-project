// query functions for vinyls table in vinyl_collection database

const { get } = require('../app');
const db = require('../db/index');


// get all vinyls
getAllVinyls = async (req,res) => {
    try {
        const allVinyls = await db.any('SELECT * FROM vynils');
        return allVinyls;
    } catch (error) {
        return error;
    }
}

// get a single vinyl by id
getSingleVinyl = async (id) => {
    try {
        const singleVinyl = await db.one('SELECT * FROM vynils WHERE id = $1', id);
        console.log(singleVinyl);
        return singleVinyl;

    } catch (error) {
        return error;
    }
}

//post a new vinyl
postNewVinyl = async (req,res) => {
    try {
        const { artist, album, year, condition, cover, notes } = req.body;
        const newVinyl = await db.one('INSERT INTO vynils (artist, album, year, condition, cover, notes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [artist, album, year, condition, cover, notes]);
        return newVinyl;
    } catch (error) {
        return error;
    }
}  

//update vinyl by id
updateVinyl = async (req,res) => {
    try {
        const { id } = req.params;
        const { artist, album, year, condition, cover, notes } = req.body;
        const updatedVinyl = await db.one('UPDATE vynils SET artist = $1, album = $2, year = $3, condition = $4, cover = $5, notes = $6 WHERE id = $7 RETURNING *', [artist, album, year, condition, cover, notes, id]);
        return updatedVinyl;
    } catch (error) {
        return error;
    }
}

deleteVinyl = async (req,res) => {
    try {
        const { id } = req.params;
        
        const deletedVinyl = await db.one('DELETE FROM vynils WHERE id = $1 RETURNING *', Number(id));
        return deletedVinyl;
    } catch (error) {
        return error;
    }
}





module.exports = {  getAllVinyls, getSingleVinyl, postNewVinyl, updateVinyl, deleteVinyl };

