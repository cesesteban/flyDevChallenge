import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import store from "store/store";
import Home from "views/Home";
import Profile from "views/Profile";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
