import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/detail/:id" component={Detail} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
