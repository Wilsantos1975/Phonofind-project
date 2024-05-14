// query functions for vinyls table in vinyl_collection database

const { get } = require('../app');
const db = require('../db/index');

getAllVinyls = async (req,res) => {
    try {
        const allVinyls = await db.any('SELECT * FROM vynils');
        return allVinyls;
    } catch (error) {
        return error;
    }
}


module.exports = {  getAllVinyls };

