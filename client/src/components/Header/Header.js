import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import MonthDropdown from "./MonthDropdown";

const Header = () => {
  const history = useHistory();

  return (
    <TopBar>
      <BackButton
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </BackButton>
      <MonthDropdown></MonthDropdown>
      <div></div>
    </TopBar>
  );
};

const BackButton = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-size: 1.3rem;
  color: #ffffff;
  text-decoration: none;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #6d9406;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
`;

export default Header;
