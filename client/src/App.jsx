import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import Header from "./components/Header";
import Home from "./components/Home";

const App = (props) => {
  const { fetchUser } = props;
  const [userFetched, setUserFetched] = useState(false);

  useEffect(() => {
    if (!userFetched) fetchUser();
    setUserFetched(true);
  }, [userFetched]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* Body here??? */}
        <div className="container">
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default connect(null, actions)(App);
