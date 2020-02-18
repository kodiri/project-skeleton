import React, { Component } from 'react';

class HomeBody extends Component {
    render() {
        return (
            <Router>
                <div>
                    <li>
                        <button className='homeBodySignUp' path='/register'>
                            <h2>Sign Up</h2>
                        </button>
                    </li>
                    <li>
                        <button className='homeBodyLogIn' path='/login'>
                            <h2>Log In</h2>
                        </button>
                    </li>
                </div>
            </Router>
        )
    }

};