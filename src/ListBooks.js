import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

//filter books according to their assigned shelf
class ListBooks extends Component {
  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                     <Book filtered={this.props.books.filter(book => book.shelf === "currentlyReading")} changeShelf={this.props.changeShelf} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2> 
                      <Book filtered={this.props.books.filter(book => book.shelf === "wantToRead")} changeShelf={this.props.changeShelf} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                     <Book filtered={this.props.books.filter(book => book.shelf === "read")} changeShelf={this.props.changeShelf} />
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
    );
  }
}

export default ListBooks