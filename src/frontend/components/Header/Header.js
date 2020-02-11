import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import User from '../User/User';
import styled from 'styled-components';


const Wrapper = styled.div`
    color: white;
    text-align: right;
`;

const Nav = styled.div`
    display: flex;
    list-style: none;
    justify-content: flex-end;
`;

const MenuItem = styled.p`
    color: white;
    margin: 20px;
`;

function Header(props) {
    return (
        <User>
            {({ data }) => (
                <Wrapper>
                    <Router>
                        <Nav>
                            <Link to="/"><MenuItem>Home</MenuItem></Link>
                            <Link to="/chat"><MenuItem>Chat</MenuItem></Link>
                            {data ?
                                <MenuItem>{data.me.name}</MenuItem> :
                                <Link to="/login"><MenuItem>Login</MenuItem></Link>
                            }
                        </Nav>
                    </Router>

                </Wrapper>
            )}
        </User>
    )
}

export default Header;