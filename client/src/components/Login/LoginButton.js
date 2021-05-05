import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LoginButton() {
    return (
        <ButtonContainer to='/main'>
            <Button>Go to budget</Button>
        </ButtonContainer>
    );
}

const ButtonContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3F51B5;
    width: 100%;
    height: 25%;
`;

const Button = styled.div`
    font: 600 18px/24px Roboto;
    color: #FFFFFF;
`;

export default LoginButton;
