import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true
  }

  // lifecycle event to make sure component has mounted before API call
  componentDidMount() {
    BooksAPI.getAll().then(data => {
      console.log(data); 
      this.setState({ books: data });
    });
  }

  changeShelf = (e, book) => {
    // console.log(e.target.value); => get the value of tageted event
    const books = this.state.books;
    book.shelf = e.target.value;
    this.setState({ books });

    // update books according to previous state
    BooksAPI.update(book, e.target.value).then(() => {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchPage books={this.state.books} changeShelf={this.changeShelf} />
          )} />
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} changeShelf={this.changeShelf} />
          )} />
      </div>
      )
  }
}

export default BooksApp
