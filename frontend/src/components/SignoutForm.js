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

    constructor(props) {
        super(props);
        this.state = {
            toHomePage: false
        }
    }

    render() {

        if (this.state.toHomePage === true) {
            return <Redirect to='/' />
        }

        const { data } = this.props;

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
                            <div className='menu-item'>
                                <button type="submit"><h3>Sign Out</h3></button>
                                {data?.me ?
                                            <div 
                                                className="menu-name">
                                                <h5>Logged in as <span>{data.me.name}</span></h5>
                                            </div>
                                            :
                                            null
                                }
                            </div>
                        </form>
                    )
                }}
            </Mutation>
        );
    }
}

export default Signout;