import React, { useState, useEffect } from "react";
import useDigitInput from "react-digit-input";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

// perhaps change the name of this component to be more meaningful
const LoginText = () => {
  const [value, onChange] = useState("");
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 6,
    value,
    onChange,
  });

  const history = useHistory();

  useEffect(() => {
    const pattern = /^\d{6}$/;
    if (pattern.test(value) === true) {
      history.push("/main");
    }
  }, [history, value]);

  //could do a trim on the value ->

  return (
    <Container>
      <Header>Log in to your account</Header>
      <SubHeader>Enter your 6-digit login code</SubHeader>
      <PasswordInput>
        <NumericInput inputMode="numeric" autoFocus {...digits[0]} />
        <NumericInput inputMode="numeric" {...digits[1]} />
        <NumericInput inputMode="numeric" {...digits[2]} />
        <NumericInput inputMode="numeric" {...digits[3]} />
        <NumericInput inputMode="numeric" {...digits[4]} />
        <NumericInput inputMode="numeric" {...digits[5]} />
        <HiddenValue>{value}</HiddenValue>
      </PasswordInput>
    </Container>
  );
};

const HiddenValue = styled.div`
  height: 0;
  width: 0;
  opacity: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  margin: 0 0 10px 0;
  font: 400 18px/21px Roboto;
  color: #000000;
`;

const SubHeader = styled.div`
  margin: 0 0 10px 0;
  font: 400 14px/16px Roboto;
  color: #000000;
`;

const PasswordInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  font: bold 40px;
`;

const NumericInput = styled.input`
  border: 1px solid black;
  margin: 0 5px 0 5px;
  height: 30px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default LoginText;
