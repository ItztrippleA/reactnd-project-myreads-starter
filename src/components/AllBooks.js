import React, { Component } from "react";
import ShelfItems from "./ShelfItems";
import * as BooksAPI from "../BooksAPI";
import escapeRegExp from "escape-string-regexp";

export default class AllBooks extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    currentlyReading: [],
    wantToRead: [],
    read: [],
    title: ["Currently Reding", "Want To Read", "Read"]
  };

  showSearchPage = state => {
    this.setState({ showSearchPage: state });
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(books => {
      const matchCR = new RegExp(escapeRegExp("currentlyReading"));
      let currentlyReading = books
        ? books.filter(book => matchCR.test(book.shelf))
        : null;

      const matchWR = new RegExp(escapeRegExp("wantToRead"));
      let wantToRead = books
        ? books.filter(book => matchWR.test(book.shelf))
        : null;

      const matchR = new RegExp(escapeRegExp("read"));
      let read = books ? books.filter(book => matchR.test(book.shelf)) : null;

      this.setState({ currentlyReading, wantToRead, read });
    });
  }
  handleBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => this.getBooks());
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <ShelfItems
            title={this.state.title[0]}
            shelf={currentlyReading}
            handleBookShelf={this.handleBookShelf.bind(this)}
          />
          <ShelfItems
            title={this.state.title[1]}
            shelf={wantToRead}
            handleBookShelf={this.handleBookShelf.bind(this)}
          />
          <ShelfItems
            title={this.state.title[2]}
            shelf={read}
            handleBookShelf={this.handleBookShelf.bind(this)}
          />
        </div>
        <div className="open-search">
          <button onClick={() => this.showSearchPage(true)}>Add a book</button>
        </div>
      </div>
    );
  }
}
