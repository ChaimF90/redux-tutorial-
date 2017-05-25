import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pplActions from '../actions/actions';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            person: {
                firstName: '',
                lastName: '',
                age: ''
            }
        }
        this.change = this.change.bind(this);
        this.save = this.save.bind(this);
    }

    change(e) {
        let person = this.state.person;
        person[e.target.name] = e.target.value;
        this.setState({ person });
    }

    save() {
        this.props.actions.savePerson(this.state.person);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="firstName"
                    value={this.state.person.firstName}
                    onChange={this.change} />
                <br />
                <input
                    type="text"
                    name="lastName"
                    value={this.state.person.lastName}
                    onChange={this.change} />
                <br />
                <input
                    type="text"
                    name="age"
                    value={this.state.person.age}
                    onChange={this.change} />
                <br />
                <button onClick={this.save}>Save</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pplActions, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(Form);

