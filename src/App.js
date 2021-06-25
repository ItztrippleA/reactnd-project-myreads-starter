import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import AllBooks from "./components/AllBooks";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    return (
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
