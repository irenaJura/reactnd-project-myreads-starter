import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
  BooksAPI.getAll().then((data) => {
    this.setState({ books: data }) 
  })
  }

  render() {
    return (
      <div className="app">
        <Route path="/searchpage" render={() => (
          <SearchPage books={this.state.books} />
          )} />
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} />
          )} />
      </div>
    )
  }
}

export default BooksApp
