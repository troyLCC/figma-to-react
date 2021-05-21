import React, { Fragment } from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav_bar}>
      <div className={classes.logo}>
        <a href="">Alivio</a>
      </div>
      <div className={classes.page_nav}>
        <ul>
          <li>
            <a href="">Why Alivio</a>
          </li>
          <li>
            <a href="">Solutions</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <button className={classes.sign_in}>Sign In</button>
          </li>
          <li>
            <button className={classes.start_trail}>Start Trail</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
