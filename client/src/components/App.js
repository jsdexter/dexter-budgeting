import React from "react";

import { ModalTransaction } from "./TransactionActions/ModalTransaction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./OverviewMain/Main";
import LoginPage from "./Login/LoginPage";
import { IntlProvider } from "react-intl";

const App = () => {
  return (
    <IntlProvider messages={{}} locale="en" defaultLocale="en">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/main" component={Main} />
            <Route path="/" component={LoginPage} />
          </Switch>
        </div>
        <ModalTransaction></ModalTransaction>
      </Router>
    </IntlProvider>
  );
};

export default App;
