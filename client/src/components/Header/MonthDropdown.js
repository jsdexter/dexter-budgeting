import React, { useState } from "react";
import {
  Main,
  DropDownContainer,
  Month,
  MonthDropDown,
  DropDownList,
  ListItem,
} from "./Header.elements";

const MonthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Main>
      <Month onClick={toggling}>January 2021</Month>
      <DropDownContainer>
        {isOpen && (
          <MonthDropDown>
            <DropDownList>
              <ListItem>January 2021</ListItem>
              <ListItem>February 2021</ListItem>
              <ListItem>March 2021</ListItem>
              <ListItem>April 2021</ListItem>
              <ListItem>May 2021</ListItem>
              <ListItem>June 2021</ListItem>
              <ListItem>July 2021</ListItem>
              <ListItem>August 2021</ListItem>
              <ListItem>September 2021</ListItem>
              <ListItem>October 2021</ListItem>
              <ListItem>November 2021</ListItem>
              <ListItem>December 2021</ListItem>
            </DropDownList>
          </MonthDropDown>
        )}
      </DropDownContainer>
    </Main>
  );
};

export default MonthDropdown;
