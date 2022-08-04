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
  const monthYear = { month: "long", year: "numeric" };
  const date = new Date();
  const newDate = new Date();
  const nextMonth = newDate.setMonth(newDate.getMonth() + 1, 1);
  const dt = new Date(nextMonth);

  return (
    <Main>
      <Month onClick={toggling}>
        {new Intl.DateTimeFormat("en-US", monthYear).format(date)}
      </Month>
      {/* <FormattedDate value={Date.now()} /> */}
      <DropDownContainer>
        {isOpen && (
          <MonthDropDown>
            <DropDownList>
              {/* This will be for the archive dropdown */}
              {/* {Object.keys(months).map((monthKey) => {
                return <ListItem monthValue={months[monthKey]}>{monthKey}</ListItem>
              })} */}
              {/* <ListItem>January 2021</ListItem> */}
              <ListItem>
                {new Intl.DateTimeFormat("en-US", monthYear).format(dt)}
              </ListItem>
            </DropDownList>
          </MonthDropDown>
        )}
      </DropDownContainer>
    </Main>
  );
};;

export default MonthDropdown;
