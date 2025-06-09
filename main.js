// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Use express.json() to parse JSON request bodies
app.use(express.json());

// Sample book data
var books = [
  { id: 1, title: '1984' },
  { id: 2, title: 'To Kill a Mockingbird' },
  { id: 3, title: 'The Great Gatsby' },
];

// Route: Home
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book API');
});

app.get('/show', (req, res) => {
  res.json(books);
});

app.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});

// ✅ Route: Add a new book (POST)
app.post('/books', (req, res) => {
  const { id, title } = req.body;

  // Check if both id and title are provided
  if (!id || !title) {
    return res.status(400).json({ error: 'Both "id" and "title" are required' });
  }

  // Check if book with same id already exists
  const exists = books.find(book => book.id === id);
  if (exists) {
    return res.status(409).json({ error: 'Book with this ID already exists' });
  }

  // Add new book
  const newBook = { id, title };
  books.push(newBook);

  res.status(201).json({
    message: 'Book added successfully',
    book: newBook
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
