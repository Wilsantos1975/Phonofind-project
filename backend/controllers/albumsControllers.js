const { Router } = require("express");
const albumsRouter = Router();

const {

  getAllAlbums,
  getSingleAlbum,

} = require("../queries/albumsQueries");

//get all albums
albumsRouter.get("/", async (req, res) => {
  try {
    const getAlbums= await getAllAlbums();
    res.status(200).json(getAlbums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get a single vinyl by id
albumsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleAlbum= await getSingleAlbum(id);
    res.status(200).json({ data: singleAlbum });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = albumsRouter;
