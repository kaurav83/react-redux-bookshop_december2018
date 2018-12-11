import {SET_FILTER, SET_SEARCH_QUERY} from './actionTypes';

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        payload: filter
    }
}

export function setSearchQuery(value) {
    return {
        type: SET_SEARCH_QUERY,
        payload: value
    }
}