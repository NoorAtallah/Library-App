import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const databaseURL = "https://library-20dde-default-rtdb.firebaseio.com";

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${databaseURL}/books.json`);
      const fetchedBooks = response.data;
      const booksArray = Object.keys(fetchedBooks).map(key => ({ id: key, ...fetchedBooks[key] }));
      setBooks(booksArray.filter(book => !book.isDeleted));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <main>
      <h2>Book List</h2>
      {isLoading ? (
        <p>Loading books...</p>
      ) : (
        <div className="book-grid">
          {books.map(book => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
