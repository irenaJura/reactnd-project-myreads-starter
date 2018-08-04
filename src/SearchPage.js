import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    query: "",
    searchBooks: []
  }
   
  queryBooks = query => {
    
    if (query) {
      let queryResults = [];

      // filter only those books that have imageLinks property to avoid errors
      BooksAPI.search(query).then(data => {

        if (data && data.length) {
          queryResults = data.filter(searchedBook => searchedBook.imageLinks).map(searchedBook => {
            searchedBook.shelf = this.addShelf(searchedBook);
            return searchedBook;
          });

          this.setState({ searchBooks: queryResults });

          } else {

          this.setState({ searchBooks: [] });

        }
      });

    } 

    this.setState({ query: query.trim() });
  };
  
  // addShelf to books that already have been assigned a shelf, otherwise show none as default
  // with help of https://github.com/dandenney/my-reads/blob/master/src/SearchBooks.js
  addShelf(searchedBook) {
    let hasShelf = this.props.books.filter(book => book.id === searchedBook.id);
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
          {this.state.searchBooks.length > 0 &&
            <Book filtered={this.state.searchBooks} changeShelf={this.props.changeShelf} />}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage

