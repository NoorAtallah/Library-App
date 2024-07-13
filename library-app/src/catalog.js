import React, { useEffect, useState } from 'react';
import axios from 'axios';
import database from './firebaseConfig';

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [editingBook, setEditingBook] = useState(null);
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

  const addBook = async () => {
    try {
      await axios.post(`${database.databaseURL}/books.json`, newBook);
      fetchBooks();
      setNewBook({ title: '', author: '' });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const updateBook = async (id) => {
    try {
      await axios.patch(`${database.databaseURL}/books/${id}.json`, editingBook);
      fetchBooks();
      setEditingBook(null);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.patch(`${database.databaseURL}/books/${id}.json`, { isDeleted: true });
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingBook(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h2>Book Catalog</h2>
      <div>
        <h3>Add New Book</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <div className="book-grid">
        {isLoading ? (
          <p>Loading books...</p>
        ) : (
          books.map(book => (
            <div key={book.id} className="book-card">
              {editingBook && editingBook.id === book.id ? (
                <div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={editingBook.title}
                    onChange={handleEditInputChange}
                  />
                  <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={editingBook.author}
                    onChange={handleEditInputChange}
                  />
                  <button onClick={() => updateBook(book.id)}>Save</button>
                  <button onClick={() => setEditingBook(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <button onClick={() => setEditingBook(book)}>Edit</button>
                  <button onClick={() => deleteBook(book.id)}>Delete</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookCatalog;
