import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/searchpage" component={SearchPage} />
        <Route exact path="/" component={ListBooks} />
      </div>
    )
  }
}

export default BooksApp
