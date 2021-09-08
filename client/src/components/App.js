import React from "react";

import { ModalBill } from "./Footer/ModalBill";
import { ModalIncome } from "./Footer/ModalIncome";
import { ModalEditBill } from "./OverviewMain/Transactions/EditTransaction/ModalEditBill";
import { ModalEditIncome } from "./OverviewMain/Transactions/EditTransaction/ModalEditIncome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./OverviewMain/Main";
import Login from "./Login/Login";
import { IntlProvider } from "react-intl";

const App = () => {
  return (
    <IntlProvider messages={{}} locale="en" defaultLocale="en">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
        <ModalEditBill></ModalEditBill>
        <ModalBill></ModalBill>
        <ModalEditIncome></ModalEditIncome>
        <ModalIncome></ModalIncome>
      </Router>
    </IntlProvider>
  );
};

export default App;
