import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import './styles/HomeBody.css'

class HomeBody extends React.Component {
    render() {
        return (
            <div className='homebody-outer-container'>
                <div className='homebody-inner-container'>
                <div className='welcomeMessage'>
                    <h1>Welcome...</h1>
                </div>
                <div className='homebody-buttons'>
                    <Link to="/login">
                        <button className='homebody-button' id='login'><h3>Log In</h3></button>
                    </Link>
                    <Link to="/register">
                        <button className='homebody-button' id='register'><h3>Sign Up</h3></button>
                    </Link>
                </div>
                <div className='homeBodyText'>
                    <h3>What we do</h3>
                    <h3>How it works</h3>
                    <h3>Why join</h3>
                </div>
                </div>
            </div>
        );
    }
};

export default HomeBody;