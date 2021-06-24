import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookDetails from "./BookDetails";
import * as BooksAPI from "../BooksAPI";

export default class search extends Component {
  state = {
    books: [],
    query: ""
  };
  handleUpdateQuery(query) {
    BooksAPI.search(query).then(books =>
      books ? this.setState({ books }) : []
    );
    this.setState({ query });
  }

  renderSearchResults() {
    const { books, query } = this.state;

    if (query) {
      return books.error ? (
        <div>No results found</div>
      ) : (
        books.map((book, index) => {
          return (
            <BookDetails
              key={index}
              book={book}
              handleBookShelf={this.handleBookShelf.bind(this)}
            />
          );
        })
      );
    }
  }

  handleBookShelf(book, shelf) {
    BooksAPI.update(book, shelf)
      .then(() =>
        shelf !== "none"
          ? alert(`${book.title} has been added to your shelf!`)
          : null
      )
      .catch(() => alert("Something went wrong! Please try again!"));
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.handleUpdateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{this.renderSearchResults()}</ol>
        </div>
      </div>
    );
  }
}
