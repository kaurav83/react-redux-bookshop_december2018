import {
    ADD_BOOK_TO_BUY,
    REMOVE_BOOK_TO_BUY
} from '../actions/actionTypes';

const initialState = {
    items: [],
};

export default function cart(state = initialState, action) {
    switch(action.type) {
        case ADD_BOOK_TO_BUY:
            return {
                ...state, items: [
                    ...state.items, action.payload
                ]
            }
        case REMOVE_BOOK_TO_BUY:
            return {
                ...state, 
                items: state.items.filter(o => o.id != action.payload)
            }
        default:
            return state;
    }
} 

// {
//     ...state, action.payload - замена 
// }

// {
//     ...state, items: [                   - добавление
//         ...state.items, action.payload
//     ]
// }