import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navBarStyle = [
    { name: "Home", to: "/", Id: 1 },
    { name: "Leistungen", to: "/unsere-leistungen", Id: 2 },
    { name: "Profil", to: "/profil", Id: 3 },
    { name: "Kontakt", to: "/kontakt", Id: 4 },
    { name: "Impressum", to: "/impressum", Id: 5 },
    { name: "Datenschutz", to: "/datenschutz", Id: 6 },
  ];

  return (
    <nav>
      <ul>
        {navBarStyle.map((e) => {
          <li key={e.Id}>
            <NavLink
              to={e.to}
              style={({ Active }) => ({
                color: Active ? "lightblue" : "hotpink",
                fontWeight: Active ? "bold" : "normal",
              })}
            >
              {e.name}
            </NavLink>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
