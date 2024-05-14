const { Router } = require("express");
const vinylsRouter = Router();

const { getAllVinyls } = require('../queries/vinylQueries');    

//get all vinyls
vinylsRouter.get('/', async (req, res) => {
    try {
        const allVinyls = await getAllVinyls();
        res.status(200).json(allVinyls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}); 





module.exports = vinylsRouter;
