import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Page404 from "./pages/Page404";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
    </Switch> */}

    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
