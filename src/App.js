import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignIn from "./pages/sign-in";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/sign-in">Sign-in</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
