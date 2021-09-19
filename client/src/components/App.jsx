import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import "materialize-css/dist/css/materialize.min.css";

import Header from "./Header";

const App = (props) => {
  const [userFetched, setUserFetched] = useState(false);

  useEffect(() => {
    if (!userFetched) props.fetchUser();
    setUserFetched(true);
  }, [userFetched]);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          {/* <Route exact path="/" component={Home} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
