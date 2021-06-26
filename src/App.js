import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import AllBooks from "./components/AllBooks";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    return (
      // routes from Allbooks to Search and back
      <Router>
        <div className="app">
          <Route path="/" exact component={AllBooks} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
