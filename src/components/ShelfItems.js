import React from "react";
import BookDetails from "./BookDeatail";

function ShelfItems({ shelf }) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BookDetails />
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShelfItems;
