// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import LinkButton from "@/components/buttons/LinkButton/LinkButton";

function Header() {
  return (
    <header className="Header">
      <div className="container-zone">
        <NavLink className="logo" to="/">
          <img src="/img/logo.png" alt="logo hr-net" />
        </NavLink>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/create-employee">Create Employee</NavLink>
            </li>
            <li>
              <NavLink to="/view-employees">View Employees</NavLink>
            </li>
          </ul>
        </nav>

        <LinkButton color="color2" link="/">
          Login
        </LinkButton>
      </div>
    </header>
  );
}

export default Header;
