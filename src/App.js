import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
