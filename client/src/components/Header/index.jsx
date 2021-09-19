import React from "react";
import { connect } from "react-redux";

import styles from "./index.module.scss";

const Header = (props) => {
  const loginContent = () => {
    switch (props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Log out</a>
          </li>
        );
    }
  };

  console.log(props.auth);

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">The Leviathan's Codex</a>
        <ul className="right">{loginContent()}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
