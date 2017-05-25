import * as types from './actionsTypes';
import axios from 'axios';


function addPersonSuccess(person) {
    return {
        type: types.ADD_PERSON_SUCCESS,
        person
    }
}


function savePerson(person) {
    return async dispatch => {
        let response = await axios.post('/person', person);
        dispatch(addPersonSuccess(response.data));
    }
}

export {
    savePerson
}
