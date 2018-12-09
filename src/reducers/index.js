import {combineReducers} from 'redux';
import booksReducer from './books';
import cartReducer from './cart';

const rootReducer = combineReducers({
    booksReducer,
    cartReducer
});

export default rootReducer;
