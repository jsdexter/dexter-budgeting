import React from "react";

import { ModalTransaction } from "./Footer/ModalTransaction";
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
            <Route path="/login:3070" component={Login} />
            <Route path="/main:3070" component={Main} />
            <Route path="/:3070" component={Login} />
          </Switch>
        </div>
        <ModalTransaction></ModalTransaction>
      </Router>
    </IntlProvider>
  );
};

export default App;
