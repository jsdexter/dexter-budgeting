import React from "react";
import styled from "styled-components";

function LoginButton() {
  return (
    <ButtonContainer to="/main">
      <Button>Go to budget</Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3f51b5;
  width: 100%;
  height: 25%;
`;

// could we reuse buttons? maybe create a "generic" folder for all the reusables?
const Button = styled.div`
  font: 600 18px/24px Roboto;
  color: #ffffff;
`;

export default LoginButton;
