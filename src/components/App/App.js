import React from "react";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, CartPage } from "../Pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};
export default App;
