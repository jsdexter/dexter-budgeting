import React from "react";

import styled from "styled-components";
import Header from "../Header/Header";
import Transactions from "../OverviewMain/Transactions/Transactions";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <Container>
      <Header></Header>
      <Transactions></Transactions>
      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  background-image: linear-gradient(to left, #ccf08f, #79a829);
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: -webkit-fill-available;
  height: 100vh;
`;

export default Main;
