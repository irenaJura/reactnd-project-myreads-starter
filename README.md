# MyReads Project

MyReads is a React project for Udacity’s Frontend course. I was provided with static example with CSS and HTML and no React. 

To get started developing I had to:

* clone the repository at https://github.com/udacity/reactnd-project-myreads-starter
* install all project dependencies with `npm install`
* start the development server with `npm start`


## The App contains 3 bookshelves: Currently reading, Want to read and Read. User can switch the books between shelves according to his/her choices. There is a search page, but only certain terms will get you results (see below). On the search page the books will be placed into category “none”, except those that are already on a specific shelf. Those will have that shelf shown as default upon clicking on the button for categories.

## Backend Server

I was also provided with a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important!!!
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend! 

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

