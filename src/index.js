import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="*" component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
