import React from "react";

import styled from "styled-components";
import LoginContainer from "./LoginContainer";

function LoginPage() {
  return (
    <Background>
      <TopBar>
        <HeaderText>Dexter Bank</HeaderText>
      </TopBar>
      <LoginDiv>
        <LoginContainer></LoginContainer>
      </LoginDiv>
    </Background>
  );
}

const Background = styled.div`
  background-image: linear-gradient(to left, #ccf08f, #79a829);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  width: 100%;
  height: 80px;
  background: #6d9406;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const HeaderText = styled.div`
  color: #ffffff;
  font: 600 24px/25px Roboto;
`;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background: #ffffff;
  width: 60%;
  height: 200px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  margin-top: 15%;
`;

export default LoginPage;
