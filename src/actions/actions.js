import {
    TEXT_NODE
} from './actionTypes';

export function textNode(textDop) {
    return {
        type: TEXT_NODE,
        payload: textDop
    }
}