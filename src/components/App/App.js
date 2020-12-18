import React from "react";
import "./app.css";
import ShopHeader from "../ShopHeader";
import { Switch, Route } from "react-router-dom";
import { HomePage, CartPage } from "../Pages";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={1030} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};
export default App;
