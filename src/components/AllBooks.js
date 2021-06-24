import React, { Component } from "react";
import ShelfItems from "./ShelfItems";

export default class AllBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <ShelfItems shelf={"Currently Reading"} />
          <ShelfItems shelf={"Want To Read Reading"} />
          <ShelfItems shelf={"Read"} />
        </div>

        <div className="open-search">
          <button onClick={() => this.props.showSearchPage(true)}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}
