import React from 'react';
import Form from './Form';
import List from './List';

export default class People extends React.Component {
    render() {
        return (
            <div>
                <Form />
                <List />
            </div>
        )
    }

}