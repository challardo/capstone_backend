const express = require("express");

const movieController = require("../controller/moviesController");

const router = express.Router();

router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovieById);
router.post("/", movieController.saveMovie);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
