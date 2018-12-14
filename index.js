const express = require('express');
const app = express();
const mongoose = require('mongoose');
const movies = require('./routes/movies');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/studio-ghibli-project', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log(`Error has occurred: ${err}`))

app.set('view engine', 'ejs');

//Built-in Middleware
app.use(express.json());

//Routes
app.use('/api/movies', movies);

app.get('/', (req, res) => res.render('landing'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server is running on port ${port} ..."));