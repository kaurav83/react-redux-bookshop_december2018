import {
    SET_BOOKS,
    SET_IS_READY,
    REMOVE_BOOK_TO_BUY,
    ADD_BOOK_TO_BUY,
    SET_FILTER
} from './actionTypes';

export function textNode(textDop) {
    return {
        type: SET_BOOKS,
        payload: textDop
    }
}