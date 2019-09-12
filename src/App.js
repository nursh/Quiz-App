import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from "./components/Home";
import Header from './components/Header';

export default () => (
  <Router>
    <div className="text-gray-800">
      <Header />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);