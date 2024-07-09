
import React from 'react';

const Main = ({ books }) => {
  return (
    <main>
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </main>
  );
};

export default Main;

