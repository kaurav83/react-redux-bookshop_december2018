import {TEXT_NODE} from '../actions/actionTypes';

const initialState = {

}

export default function textReducer(state = initialState, action) {
    switch(action.type) {
        case TEXT_NODE :
            return {
                ...state, action
            }
        default: 
            return state;
    }
}