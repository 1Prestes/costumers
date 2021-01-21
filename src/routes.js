import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StoreProvider from "./components/store/provider";
import PrivateRoute from "./pages/Private";
import Home from "./pages/home";
import SignIn from "./pages/SignIn";
import Clients from "./pages/Clients";

const Routes = () => {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <PrivateRoute path="/clients" component={Clients} />
        </Switch>
      </StoreProvider>
    </Router>
  );
};

export default Routes;
