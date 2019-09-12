import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from "./components/Home";

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);