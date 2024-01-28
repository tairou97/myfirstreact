import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  const activeStyle = [
    { name: "Home", to: "/", id: 1 },
    { name: "About", to: "/about-us", id: 2 },
    { name: "Contact", to: "/contact", id: 3 },
    { name: "Projects", to: "/projects", id: 4 },
    { name: "Preis", to: "/preis", id: 5 },
  ];

  return (
    <nav className={styles.container}>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {activeStyle.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "hotpink",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
