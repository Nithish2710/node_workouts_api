const express = require('express');
const moviesRouter = require('./movies.route');

const app = express();

app.use(express.json()); 
app.use('/api', moviesRouter); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api`);
});