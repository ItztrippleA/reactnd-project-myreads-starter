import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Book from "./components/BookDetails";
import Search from "./components/Search";
import Shelf from "./components/ShelfItems";
import { Link } from "react-router-dom";
import { Route } from "react-router";

const Shelves = [
  { title: "Currently reading", value: "currentlyReading" },
  { title: "Want to read", value: "wantToRead" },
  { title: "Read", value: "read" }
];

class BooksApp extends React.Component {
  state = {
    books: [],
    showSVG: false
  };

  getAllBooks() {
    BooksAPI.getAll().then(response => {
      this.setState({ books: response });
    });
  }
  componentDidMount() {
    this.getAllBooks();
  }
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <div className="list-books-content">
                <div>
                  {Shelves.map(f => {
                    return (
                      <Shelf
                        key={f.title}
                        title={f.title}
                        Books={this.state.books.map(e => {
                          if (e.shelf === f.value) {
                            return (
                              <Book
                                key={e.id}
                                Book={e}
                                updateShelf={this.updateShelf}
                                title={e.title}
                                image={e.imageLinks.thumbnail}
                                autor={e.authors}
                                value={e.shelf}
                              />
                            );
                          }
                        })}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="open-search">
                <Link to="/Search" id="button">
                  Add book
                </Link>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              updateShelf={this.updateShelf}
              booksFromMainPage={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
