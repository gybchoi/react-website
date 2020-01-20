import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import ContentMain from "./components/ContentMain";
import ContentReact from "./components/ContentReact";
import ContentKKuTu from "./components/ContentKKuTu";
import ContentDeveloper from "./components/ContentDeveloper";
import Info from "./components/Info";

export default () => (
  <Router>
    <Route path="/" component={App} />
    <Route exact path="/" component={ContentMain} />
    <Route path="/react" component={ContentReact} />
    <Route path="/kkutu" component={ContentKKuTu} />
    <Route path="/developer" component={ContentDeveloper} />
    <Route path="/login" component={Login} />
    <Route component={Info} />
  </Router>
);
