import React, from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: red;
    text-align: right;
`;

function Header(props) {
    return (
        <Wrapper>
            <h1>{props.username}</h1>
        </Wrapper>
    )
}

export default Header;