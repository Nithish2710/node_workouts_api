const express = require('express');
const { movieIndex, movieCreate, movieUpdate, movieDelete } = require('../controllers/movies.controller');
const router = express.Router();
const PORT = 3000;


// READ (show all movies)
router.get('/', movieIndex);

// create a new movie
router.post('/movies', movieCreate);

// update
router.put('/movies/:id', movieUpdate);

// delete a movie
router.delete('/movies/:id', movieDelete);  

module.exports = router;
