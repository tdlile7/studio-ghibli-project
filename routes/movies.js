const {Movie, validate} = require('../models/movie');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    const movies = await Movie.find().sort('name');
    res.send(movies);
});

router.post("/", async (req, res) => {
    const {error} = validate(req.body);
    if(error) console.log(error)

    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        director: req.body.director,
        producer: req.body.producer,
        releaseDate: req.body.releaseDate,
        rt_score: req.body.rt_score,
        wiki: req.body.wiki
    });
    await movie.save();
    res.send(movie);
});

module.exports = router;
