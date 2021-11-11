import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={Page404} />
      </Switch>
    );
  }
}
export default App;
