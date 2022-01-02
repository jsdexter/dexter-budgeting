import styled from "styled-components";

export const MonthHeader = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;

export const Main = styled.div`
`;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Archive = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color: #ffffff;
  text-decoration: none;
`;

export const Month = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color: #ffffff;
  text-decoration: none;
`;

export const ArchiveDropDown = styled.div`
  margin-top: 10px;
  background: #ffffff;
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
  background: #ffffff;
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
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
