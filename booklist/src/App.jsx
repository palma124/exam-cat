
import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import PropTypes from 'prop-types';

const Books = [
  {
    title: "Learn Python for Beginners",
    author: "Martin Ondiek",
    description: "A Python cookbook for dummies."
  },
  {
    title: "How to Cook Ugali",
    author: "Philip Muya",
    description: "An algorithm book on how to be a pro in Ugali baking."
  },
  {
    title: "How to Bathe Well",
    author: "Nicholas Ondiek",
    description: "The perfect guide on how to get that body sparkling clean once more."
  },
  {
    title: "The Great Controversy",
    author: "Ellen G. White",
    description: "A virtual reality book showing you the end times and the apocalypse."
  },
];

const Book = ({ title, author, description }) => {
  return (
  <div>
    <h2>{Books.title}</h2>
    <h3>by {Books.author}</h3>
    <p>{Books.description}</p>
  </div>
  );
};



Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const BookList = () => {
  const [books, setBooks] = useState(Books);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.description) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '', description: '' }); 
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
      <input type="text" name= "title" placeholder="title" value={newbook.title} onChange={handleChange} required />
      <input type="text" name= "author" placeholder="author name" value={newbook.author} onChange={handleChange} required />
        
      <textarea name="description" id="enter description" value={newbook.description} onChange={handleChange} required></textarea>
        <button type="submit">Add Book</button>
      </form>
      <div>
        {books.map((book, index) => (
          <Book key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;


