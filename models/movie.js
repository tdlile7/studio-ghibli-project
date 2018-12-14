const mongoose = require("mongoose");
const Joi = require('joi');

const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    director: String,
    producer: String,
    releaseDate: String,
    rt_score: Number,
    wiki: String
}));

const validateMovie = function(movie) {
    const schema = {
        title: Joi.string(),
        description: Joi.string(),
        director: Joi.string(),
        producer: Joi.string(),
        releaseDate: Joi.string(),
        rt_score: Joi.number(),
        wiki: Joi.string()
    };
    
    return Joi.validate(movie, schema);
};

exports.Movie = Movie;
exports.validate = validateMovie;