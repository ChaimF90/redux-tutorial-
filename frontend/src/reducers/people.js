import * as types from '../actions/actionsTypes';

export default function peopleReducer(state = [], action) {
    switch(action.type) {
        case types.ADD_PERSON_SUCCESS:
            return [...state, action.person]
        default:
            return state;
    }
}