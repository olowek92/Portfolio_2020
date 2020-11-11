export const ADD_QUESTION = 'ADD_QUESTION';
export const TOGGLE_QUESTION = 'TOGGLE_QUESTION';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    ALL_QUESTIONS: 'ALL_QUESTIONS',
    ASKED_QUESTIONS: 'ASKED_QUESTIONS',
    UNASKED_QUESTIONS: 'UNASKED_QUESTIONS'
}

export function addQuestion(text) {
    return {type: ADD_QUESTION, text};
}

export function toggleQuestion(index) {
    return {type: TOGGLE_QUESTION, index};
}

export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter};
}