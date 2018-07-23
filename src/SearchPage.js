import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchPage extends Component {
  state = {
    query: ""
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    let showBooks
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i")
      showBooks = this.props.books.filter(filtered => match.test(filtered.title))
    } else {
      showBooks = this.props.books;
    }

    showBooks.sort(sortBy("title"))

    return (
        <div className="search-books">
          <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => this.props.books.setState({ books: [] })}>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Book filtered={showBooks} changeShelf={this.props.changeShelf} />
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage

