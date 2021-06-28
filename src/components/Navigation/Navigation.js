import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

export default function Navigation() {
  return (
    <ul>
      <li className={classes.NavigationItem}>
        <NavLink to="/" exact activeClassName="active">
          Shopping List
        </NavLink>
      </li>
    </ul>
  );
}
