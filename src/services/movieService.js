const Movie = require("../models/movie");

const getMovies = async () => {
  try {
    const movies = await Movie.find().lean().exec();

    if (movies == null) {
      return [];
    }

    return movies;
  } catch (ex) {
    console.log(ex);
  }
};

const getMoviesById = (id) => {
  const movie = Movie.findById(id).lean().exec();

  return movie;
};

const saveMovie = async (movie) => {
  const saveMovie = new Movie(movie);

  await saveMovie.save();

  return saveMovie;
};

const updateMovie = async (id, newMovie) => {
  const updateMovie = await Movie.findByIdAndUpdate(id, newMovie, {
    returnDocument: "after",
  })
    .lean()
    .exec();

  return updateMovie;
};

const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id).exec();
};

module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovie,
};
