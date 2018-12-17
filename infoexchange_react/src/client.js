import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import author from "./pages/author";
import index from "./pages/index";

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={index}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="author(/:article)" name="author" component={author}></Route>
    </Route>
  </Router>,
app);