import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';


const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

class Signout extends Component {

    constructor() {
        super();
        this.state = {
            toHomePage: false
        }
    }

    render() {

        if (this.state.toHomePage === true) {
            return <Redirect to='/' />
        }

        return (

            <Mutation mutation={SIGN_OUT_MUTATION} variables={this.state}>
                {(signout, { error, loading }) => {
                    return (
                        <form action="post"
                            onSubmit={async e => {
                                e.preventDefault();
                                await signout();
                                this.setState({
                                    toHomePage: true
                                })
                            }}>
                            <button type="submit">Sign Out</button>
                        </form>
                    )
                }}
            </Mutation>
        );
    }
}

export default Signout;