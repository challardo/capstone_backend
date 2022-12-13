const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: { type: String, require: true },
  synopsis: { type: String, require: true },
  coverImage: { type: String, require: true },
  genre: { type: String, require: true },
  movieUrl: { type: String, require: true },
  releaseDate: { type: String, require: true },
  favorite: { type: Boolean },
});

const movieModel = mongoose.model("movie", MovieSchema);

module.exports = movieModel;
