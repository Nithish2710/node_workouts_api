let movies = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'The Matrix' },
  { id: 3, title: 'Interstellar' },
];

const movieIndex= (req, res)=>{
    res.send('Welcome to the Movie API');
}

const movieCreate = (req, res) => {
    const newMovie = {
    id: movies.length + 1,
    title: req.body.title
  };
  movies.push(newMovie);
  res.json({
    message: 'Movie added successfully',
    movie: newMovie
  })};

const movieUpdate = (req, res) => {
    const movieId = parseInt(req.params.id);
    const index = movies.findIndex(m => m.id === movieId);
    if (index !== -1) {
      movies[index].title = req.body.title;
      res.json({
        message: 'Movie updated successfully',
        movie: movies[index]
      });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  }

const movieDelete = (req, res) => {
    const movieId = parseInt(req.params.id);
    const index = movies.findIndex(m => m.id === movieId);
    if (index !== -1) {
      const deleted = movies.splice(index, 1);
      res.json({
        message: 'Movie deleted successfully',
        movie: deleted[0]
      });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  }

module.exports = {
    movieIndex,
    movieCreate,
    movieUpdate,
    movieDelete
};