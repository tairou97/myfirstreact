import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navBarStyle = [
    { name: "Home", to: "/", Id: 1 },
    { name: "Leistungen", to: "/leistungen", Id: 2 },
    { name: "Profil", to: "/profil", Id: 3 },
    { name: "Kontakt", to: "/kontakt", Id: 4 },
    { name: "Impressum", to: "/impressum", Id: 5 },
    { name: "Datenschutz", to: "/datenschutz", Id: 6 },
  ];

  return (
    <nav>
      <ul className="flex  bg-slate-500 p-4">
        {navBarStyle.map((e) => (
          <li key={e.Id} className="p-2">
            <NavLink
              className={"p-3 rounded"}
              to={e.to}
              style={({ isActive }) => ({
                color: isActive ? "lightblue" : "lightgreen",
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "red" : "",
              })}
            >
              {e.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
