import React from 'react'
// import styled from 'styled-components';
// import Header from './Header/Header';
// import Transactions from './OverviewMain/Transactions/Transactions';
// import Footer from './Footer/Footer';
import { ModalBill } from './Footer/ModalBill';
import { ModalIncome } from './Footer/ModalIncome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './OverviewMain/Main';
import Login from './Login/Login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ="/login" component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
      <ModalBill></ModalBill>
      <ModalIncome></ModalIncome>
    </Router>
  )
}

export default App