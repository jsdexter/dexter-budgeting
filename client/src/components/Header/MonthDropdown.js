import React, { useState } from "react";

import {
  Main,
  Month,
} from "./Header.elements";

// when we do dropdowns, we usually want to just pass it an array of options, not figuring out how to render it
// we also would need to worry about duplicates for each item passed
const MonthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const monthYear = { month: "long", year: "numeric" };
  const date = new Date();

  return (
    <Main>
      <Month onClick={toggling}>
        {new Intl.DateTimeFormat("en-US", monthYear).format(date)}
      </Month>
    </Main>
  );
};;

export default MonthDropdown;
