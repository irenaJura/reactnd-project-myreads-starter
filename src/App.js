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
    console.log(data);
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
          <div>
            <ListBooks books={this.state.books} />
          </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
