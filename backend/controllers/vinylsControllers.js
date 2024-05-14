const { Router } = require("express");
const vinylsRouter = Router();

const {
  getAllVinyls,
  getSingleVinyl,
  postNewVinyl,
  updateVinyl,
  deleteVinyl,
} = require("../queries/vinylQueries");

//get all vinyls
vinylsRouter.get("/", async (req, res) => {
  try {
    const allVinyls = await getAllVinyls();
    res.status(200).json(allVinyls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get a single vinyl by id
vinylsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleVinyl = await getSingleVinyl(id);
    res.status(200).json({ data: singleVinyl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = vinylsRouter;
