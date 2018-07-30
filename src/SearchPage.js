import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchPage extends Component {
  state = {
    query: "",
    queriedBooks: []
  }

  queryBooks = query => {
    let queriedBooks = [];
    

    if (query) {
      let queryResults = [];

      BooksAPI.search(query).then(data => {
        if (data && data.length) {
          queryResults = data.map(data => {
            data.shelf = this.addShelf(data);
            return data;
          });

          this.setState({
            queriedBooks: queryResults
          });
        } else {
          this.setState({
            queriedBooks: []
          });
        }
      });

    } else {
      this.setState({
        queriedBooks: []
      });
    }

  this.setState({
      query: query.trim()
    });
  };

  addShelf(data) {
    let hasShelf = this.props.books.filter(book => book.id === data.id);
    return hasShelf.length ? hasShelf[0].shelf : "none";
  }

  render() {
  
    return (
        <div className="search-books">
          <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.queryBooks(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.queriedBooks.length > 0 &&
            <Book filtered={this.state.queriedBooks} changeShelf={this.props.changeShelf} />}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage

