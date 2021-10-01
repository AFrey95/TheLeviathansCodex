import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import c from "classnames";

import styles from "./index.module.scss";

const Header = (props) => {
  const loginStatusLink = () => {
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

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className={c(styles.logo, "left brand-logo")}>
          The Leviathan's Codex
        </Link>
        <ul className="right">
          {props.auth?.role === "ADMIN" && (
            <li>
              <Link to="/new" className="waves-effect waves-light btn">
                Add Stuff
              </Link>
            </li>
          )}
          {loginStatusLink()}
          {/* <li>
            <img
              className={c(styles.headerImage, "responsive-img circle")}
              src={props.auth?.pfp || null}
            />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
