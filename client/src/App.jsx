import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import c from "classnames";
import * as actions from "actions";

import Forbidden from "components/Forbidden";
import Header from "./components/Header";
import Home from "./components/Home";
import NewAssetForm from "./components/NewAssetForm";
import AncestryView from "components/AncestryView";
import BackgroundView from "components/BackgroundView";
import ClassView from "components/ClassView";
import FeatView from "components/FeatView";
import ItemView from "components/ItemView";
import MechanicView from "components/MechanicView";
import MonsterView from "components/MonsterView";
import ProfessionView from "components/ProfessionView";
import RetainerView from "components/RetainerView";
import SpellView from "components/SpellView";
import SubclassView from "components/SubclassView";

import styles from "./index.module.scss";

const App = (props) => {
  const { auth, fetchUser } = props;

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
                  <Route exact path="/ancestries/:id?" component={AncestryView} />
                  <Route exact path="/backgrounds/:id?" component={BackgroundView} />
                  <Route exact path="/classes/:id?" component={ClassView} />
                  <Route exact path="/feats/:id?" component={FeatView} />
                  <Route exact path="/items/:id?" component={ItemView} />
                  <Route exact path="/mechanics/:id?" component={MechanicView} />
                  <Route exact path="/monsters/:id?" component={MonsterView} />
                  <Route exact path="/professions/:id?" component={ProfessionView} />
                  <Route exact path="/retainers/:id?" component={RetainerView} />
                  <Route exact path="/spells/:id?" component={SpellView} />
                  <Route exact path="/subclasses/:id?" component={SubclassView} />
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
