import React from "react";
import { connect } from "react-redux";

import styles from "./index.module.scss";

const Forbidden = (props) => {
  return (
    <div>
      <h3>Uh oh!</h3>
      {props.auth ? (
        <p>
          Looks like you don't have access yet. Don't worry, we know you're here
          and we'll get you access soon.
        </p>
      ) : (
        <p>You need to log in before you can use The Leviathan's Codex.</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Forbidden);
