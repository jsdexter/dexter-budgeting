import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const TopBar = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center; 
//     width: 100%;
//     height: 80px;
//     background: #6D9406;
//     box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
// `;


export const MonthHeader = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
`;

export const Main = styled.div`
    /* z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black; */
`;

export const DropDownContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Archive = styled(Link)`
    font-weight: 500;
    font-size: 1.3rem;
    color: #FFFFFF;
    text-decoration: none;
`;

export const Month = styled(Link)`
    font-weight: 500;
    font-size: 1.3rem;
    color: #FFFFFF;
    text-decoration: none;
`;

export const ArchiveDropDown = styled.div`
    margin-top: 10px;
    background: #FFFFFF; 
    width: 200px;
    position: absolute;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    box-sizing: border-box;
    font: 400 16px/20px Roboto;
    &:first-child {
        padding-top: 0.8em;
    } 
`;

export const MonthDropDown = styled.div`
    margin-top: 10px;
    background: #FFFFFF; 
    width: 200px;
    position: absolute;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    box-sizing: border-box;
    font: 400 16px/20px Roboto;
    &:first-child {
        padding-top: 0.8em;
    } 
`;

export const DropDownList = styled.ul`
    /* background: #ffffff;
    background: pink; */
    /* border: 1px solid #000000; */
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    box-sizing: border-box;
    font: 400 16px/20px Roboto;
    &:first-child {
        padding-top: 0.8em;
  } */
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;