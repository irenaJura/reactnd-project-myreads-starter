import React, { Component } from "react";

// map though filtered books to render them on the page
class Book extends Component {
  render() {
    const defaultPhoto = 'https://www.shopmybooks.com/img/default_book_cover.jpg';
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.filtered.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : `url(${defaultPhoto})` }} />
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={e => this.props.changeShelf(e, book)} >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default Book;  