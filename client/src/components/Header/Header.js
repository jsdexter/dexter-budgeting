import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ArchiveDropdown from './ArchiveDropdown';
import MonthDropdown from './MonthDropdown';

const Header = () => {
    return (
        <TopBar>
            <BackButton>Back</BackButton>
            <MonthDropdown>January 2021</MonthDropdown>
            <ArchiveDropdown></ArchiveDropdown>
      </TopBar>
    );
}

const BackButton = styled(Link)`
    font-weight: 500;
    font-size: 1.3rem;
    color: #FFFFFF;
    text-decoration: none;
`;

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
    width: 100%;
    height: 80px;
    background: #6D9406;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
`;

export default Header;