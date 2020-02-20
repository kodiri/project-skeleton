import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import './styles/UpdateForm.css';

const UPDATE_USER_DETAILS_MUTATION = gql`
    mutation UPDATE_USER_DETAILS_MUTATION($bio: String!, $picture: String!) {
        updateDetails(bio: $bio, picture: $picture) {
            id
            email
            name
        } 
    }
`;

class UpdateForm extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default UpdateForm;
