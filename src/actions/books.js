import {
    SET_BOOKS,
    SET_IS_READY
} from './actionTypes';

export function textNode(textDop) {
    return {
        type: SET_BOOKS,
        payload: textDop
    }
}