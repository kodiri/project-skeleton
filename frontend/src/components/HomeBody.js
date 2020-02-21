import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import skull from '../assets/icons/skull.png'
import './styles/HomeBody.css'

class HomeBody extends React.Component {
    render() {
        return (
            <div className='homebody-outer-container'>
                <div className='homebody-inner-container'>
                    <div className='skull-logo'>
                        <img src={skull} alt='skull logo' />
                    </div>
                    <div className='welcomeMessage'>
                        <h1>Welcome...</h1>
                        <h4>Some secondary message to go here...</h4>
                    </div>
                    <div className='homebody-buttons'>
                        <Link to="/login">
                            <button className='homebody-button' id='login'><h3>Log in</h3></button>
                        </Link>
                        <Link to="/register">
                            <button className='homebody-button' id='register'><h3>Sign up</h3></button>
                        </Link>
                    </div>
                    <div className='homeBodyText'>
                        <h3>What we do</h3>
                        <h3>How it works</h3>
                        <h3>Why join</h3>
                    </div>
                </div>
                <div className='homebody-footer-links'>
                    <h5>Terms and Conditions</h5>
                    <h5>Privacy and Cookies</h5>
                    <h5>FAQs</h5>
                </div>
            </div>
        );
    }
};

export default HomeBody;