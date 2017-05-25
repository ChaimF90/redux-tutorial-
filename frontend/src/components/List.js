import React from 'react';
import { connect } from 'react-redux';

function List(props) {
    function createRow(p) {
        return (
            <li key={p.id}>{p.firstName}</li>
        )
    }
    let people = props.people || [];

    return (
        <ul>
            {people.map(p => createRow(p))}
        </ul>
    )
}

function mapStateToProps(state) {
    return (
        {people: state.people}
    )
}

const wrapper = connect(mapStateToProps, null);
export default wrapper(List);


