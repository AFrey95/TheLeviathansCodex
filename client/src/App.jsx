import React, { useEffect } from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import c from "classnames";
import * as actions from "actions";

import Forbidden from "components/Forbidden";
import Header from "./components/Header";
import Home from "./components/Home";
import NewAssetForm from "./components/NewAssetForm";
import AncestriesList from "components/AncestriesList";
import BackgroundsList from "components/BackgroundsList";
import ClassesList from "components/ClassesList";
import FeatsList from "components/FeatsList";
import ItemsList from "components/ItemsList";
import MechanicsList from "components/MechanicsList";
import MonstersList from "components/MonstersList";
import ProfessionsList from "components/ProfessionsList";
import SubclassesList from "components/SubclassesList";

import styles from "./index.module.scss";

const App = (props) => {
  const { auth, fetchUser } = props;
  const history = useHistory();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <div>
          <Header />
          <div className={c(styles.body)}>
            <div className={c("container")}>
              {!auth || auth.role === "NEW" ? (
                <Route path="/" component={Forbidden} />
              ) : (
                <React.Fragment>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/new" component={NewAssetForm} />
                  <Route exact path="/ancestries" component={AncestriesList} />
                  <Route
                    exact
                    path="/backgrounds"
                    component={BackgroundsList}
                  />
                  <Route exact path="/classes" component={ClassesList} />
                  <Route exact path="/feats" component={FeatsList} />
                  <Route exact path="/items" component={ItemsList} />
                  <Route exact path="/mechanics" component={MechanicsList} />
                  <Route exact path="/monsters" component={MonstersList} />
                  <Route
                    exact
                    path="/professions"
                    component={ProfessionsList}
                  />
                  <Route exact path="/subclasses" component={SubclassesList} />
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
