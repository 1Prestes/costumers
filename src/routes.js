import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StoreProvider from "./components/store/provider";
import PrivateRoute from "./pages/Private";
import Home from "./pages/home";
import SignIn from "./pages/SignIn";
import Clients from "./pages/Clients";
import CreateClient from "./pages/manage/clients/create";

const Routes = () => {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <PrivateRoute exact path="/clients" component={Clients} />
          <PrivateRoute path="/clients/new" component={CreateClient} />
        </Switch>
      </StoreProvider>
    </Router>
  );
};

export default Routes;
