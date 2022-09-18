import React, { useState } from "react";
import styled from "styled-components";

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
};

const Main = styled.div`
`;

const Month = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color: #ffffff;
  text-decoration: none;
`;

export default MonthDropdown;
