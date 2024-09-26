import React, { useState } from 'react';
import './App.css';

// BookCard component to display each book
const BookCard = ({ book }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p><strong>Author:</strong> {book.author}</p>
    <p>{book.description}</p>
  </div>
);

// Form component to handle book addition
const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, author, description });
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

// Main App component
const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="App">
      <header>
        <h1>Book lists</h1>
      </header>
      <BookForm onAddBook={addBook} />
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        ) : (
          <p className="no-books">No books added yet. Start by adding one!</p>
        )}
      </div>
    </div>
  );
};

export default App;
