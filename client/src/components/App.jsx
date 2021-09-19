import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import "materialize-css/sass/materialize.scss";

import Header from "./Header";

const App = (props) => {
  const { fetchUser } = props;
  const [userFetched, setUserFetched] = useState(false);

  useEffect(() => {
    if (!userFetched) fetchUser();
    setUserFetched(true);
  }, [userFetched]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">stuff</div>
          {/* <Route exact path="/" component={Home} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
