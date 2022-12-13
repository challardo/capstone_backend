const MovieService = require("../services/movieService");

const getMovies = async (req, res) => {
  const movies = await MovieService.getMovies();

  res.json(movies);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;

  const movie = await MovieService.getMoviesById(id);

  res.json(movie);
};

const saveMovie = async (req, res) => {
  const movie = req.body;

  const saveMovie = await MovieService.saveMovie(movie);

  res.status(201).json(saveMovie);
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const newMovie = req.body;

  const updateMovie = await MovieService.updateMovie(id, newMovie);
  res.json(updateMovie);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  await MovieService.deleteMovie(id);

  res.status(204).send();
};
module.exports = {
  getMovies,
  getMovieById,
  saveMovie,
  updateMovie,
  deleteMovie,
};
