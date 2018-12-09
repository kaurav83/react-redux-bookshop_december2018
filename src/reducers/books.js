import {
    SET_BOOKS,
    SET_IS_READY
} from '../actions/actionTypes';

const initialState = {
    items: null,
    isLoading: false
}

export default function booksReducer(state = initialState, action) {
    switch(action.type) {
        case SET_BOOKS :
            return {
                ...state, 
                items: action.payload,
                isLoading: true
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