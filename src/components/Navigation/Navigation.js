import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink to="/" exact activeClassName="active">
        Shopping List
      </NavLink>
    </div>
  );
}
