import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { textNode } from './actions/books';
import {setFilter, setSearchQuery} from './actions/filter';

import MenuBar from './components/MenuBar';
import BookCard from './components/BookCard';
import Filter from './components/Filter';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
    switch(filterBy) {
      case 'all':
        return books;
      case 'price_high':
        return orderBy(books, 'price', 'desc');
      case 'price_low':
        return orderBy(books, 'price', 'asc');
      case 'author':
        return orderBy(books, 'author', 'desc');
      default: 
        return;
    }
}

class App extends Component {
  componentDidMount() {
    axios.get('/books.json')
      .then(response => this.props.setBooks(response.data));
  }

  
  render() {
    console.log(this.props, 'FILTER BY')
    const { books, isLoading, setFilter, filterBy, setSearchQuery } = this.props;
    return (
      <React.Fragment>
        <Container>
          <MenuBar bookTitle="temporarry" />
          <Filter 
            setFilter={setFilter}
            filterBy={filterBy}
            setSearchQuery={setSearchQuery}
          />
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
    books: sortBy(booksReducer.items, booksReducer.filterBy),
    isLoading: booksReducer.isLoading,
    filterBy: booksReducer.filterBy
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBooks: books => dispatch(textNode(books)),
    setFilter: filters => dispatch(setFilter(filters)),
    setSearchQuery: value => dispatch(setSearchQuery(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
