# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
// src/BookList.js
import React from 'react';

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about the serious issues of rape and racial inequality."
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel and cautionary tale about the future."
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of the young and mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan."
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    description: "The narrative of Ishmael, a sailor on the whaling ship Pequod, led by the obsessive Captain Ahab."
  }
];

const BookList = () => {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;


import './App.css';
import React from 'react';
import Header from './components/header';
import PropTypes from 'prop-types';

const books = [
  // Your book data...
];

const Book = ({ title, author, description }) => (
  <li>
    <h2>{title}</h2>
    <h3>by {author}</h3>
    <p>{description}</p>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const BookList = () => {
  return (
    <div>
      <Header />
      <ul>
        {books.map((book) => (
          <Book key={book.title} {...book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;




import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import PropTypes from 'prop-types';

const initialBooks = [
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

const Book = ({ title, author, description }) => (
  <div className="card">
    <h2>{title}</h2>
    <h3>by {author}</h3>
    <p>{description}</p>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const BookList = () => {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.description) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '', description: '' }); // Reset form
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newBook.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>
      <div className="book-list">
        {books.map((book, index) => (
          <Book key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;








app.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;



product list.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;





product.js
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
};

export default Product;




cart.js
import React from 'react';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;














create components


import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  );
};

export default App;





develop a simple react application that diplays a list of books. Each book should have the following properties: title, author and description.  The applicaton should include: a header displaying the title "booklist". a component to display each book in a card format. a form to add a new book with fields for title, author and description. a button to submit the form and update the book list without reloading the page



import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell', description: 'Dystopian novel' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'Classic novel' }
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <header>
        <h1>BookList</h1>
      </header>
      <BookForm addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;







import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;




import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
    </div>
  );
};

export default Book;











import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && description) {
      addBook({ title, author, description });
      setTitle('');
      setAuthor('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;




.book-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

form {
  margin: 20px 0;
}

form div {
  margin-bottom: 10px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
import './styles.css';
import it to your app.js









npm start