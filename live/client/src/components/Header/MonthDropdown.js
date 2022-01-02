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

  // const months = {}
  // transactions.forEach((transaction) => {
  //   const date = new Date(transaction.dueDate);
  //   const key = new Intl.DateTimeFormat("en-US", monthYear).format(date);
  //   months[key] = `${date.getMonth()}-${date.getDate()}`;
  // });

  // { 'March 2021': '03-2021' }


  // const months = transactions.map((transaction) => {
  //   return new Intl.DateTimeFormat("en-US", monthYear).format(
  //     new Date(transaction.dueDate)
  //   );
  // });

  // months = [ March 2021, March 2021, March 2021, April 2021, April 2021 ]

  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }

  // // usage example:
  // var a = ["a", 1, "a", 2, "1"];
  // var unique = a.filter(onlyUnique);

  // console.log(unique); // ['a', 1, 2, '1']

  // // _.unique(months)


  // Generate last 12 months

  // let months = [];
  // let now = Date.now(); // 56465453132154

  // let monthDuration = 1000 * 60 * 60 * 24 * 30.5;
  // for (let i = 0; i <= 12; i++) {
  //   // 0, 1, 2, 3, 4, 5 ... 12

  //   const newDate = new Intl.DateTimeFormat("en-US", monthYear).format(new Date(now - (monthDuration * i)));
  //   months.push(newDate);
  // }


  // _.map(months, (key, val) => {

  // });


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
