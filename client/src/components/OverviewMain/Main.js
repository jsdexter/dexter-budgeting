import React from 'react';

import styled from 'styled-components';
import Header from '../Header/Header';
import Transactions from '../OverviewMain/Transactions/Transactions';
import Footer from '../Footer/Footer';

// const Main = () => {
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
    background-image: linear-gradient(to left, #CCF08F , #79A829);
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: -webkit-fill-available;
`;

export default Main;