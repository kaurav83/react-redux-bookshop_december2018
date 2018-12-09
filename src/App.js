import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { textNode } from './actions/books';
import Demo from './components/Demo';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('/books.json')
      .then(response => this.props.setBooks(response.data));
  }
  render() {
    console.log(this.props, 'AFTER RENDER')
    const {books} = this.props;
    return (
      <ul className="App">
        {
          books ? books.map((book) => {
            return (
              <li key={book.id}>{book.author}</li>
            )
          })
          :
          <div><img src="https://cdn-images-1.medium.com/max/1000/1*inYwyq37FdvRPLRphTqwBA.gif" alt="preload"/></div>
        }
      </ul>
    );
  }
}

const mapStateToProps = ({booksReducer}) => {
  return {
    books: booksReducer.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBooks: books => dispatch(textNode(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
