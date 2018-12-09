import {
    SET_BOOKS,
    SET_IS_READY,
    SET_FILTER
} from '../actions/actionTypes';

const initialState = {
    items: null,
    isLoading: false,
    filterBy: 'all'
}

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                isLoading: true
            }
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload
            }
        case SET_IS_READY:
            return {
                ...state, isLoading: action.payload
            }
            break;
        default:
            return state;
    }
}