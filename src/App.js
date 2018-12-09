import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { textNode } from './actions/books';

import MenuBar from './components/MenuBar';
import BookCard from './components/BookCard';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('/books.json')
      .then(response => this.props.setBooks(response.data));
  }
  render() {
    console.log(this.props, 'AFTER ')
    const { books, isLoading } = this.props;
    return (
      <React.Fragment>
        <Container>
          <MenuBar bookTitle="temporarry" />
          <Card.Group>
            {
              isLoading ? books.map((book) => {
                return (
                  <BookCard
                    key={book.id}
                    {...book}
                  />
                )
              })
                :
                <div>
                  <img
                    src="https://cdn-images-1.medium.com/max/1000/1*inYwyq37FdvRPLRphTqwBA.gif"
                    alt="preload"
                  />
                </div>
            }
          </Card.Group>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ booksReducer }) => {
  return {
    books: booksReducer.items,
    isLoading: booksReducer.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBooks: books => dispatch(textNode(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
