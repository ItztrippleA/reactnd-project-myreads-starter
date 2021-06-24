import React from "react";
import BookDetails from "./BookDetails";

function ShelfItems({ title, shelf, handleBookShelf }) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelf.map(book => (
              <BookDetails
                key={book.id}
                book={book}
                handleBookShelf={handleBookShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShelfItems;
