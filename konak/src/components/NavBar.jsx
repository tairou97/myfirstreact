import React from "react";
import { NavLink } from "react-router-dom";
import Firma from "../img/Firma";

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
    <nav className=" ">
      <ul className="flex  px-3 py-5 justify-center ">
        {navBarStyle.map((e) => (
          <li key={e.Id} className="p-2">
            <NavLink className={"p-3 rounded"} to={e.to}>
              {e.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex  px-3 py-5 justify-center ">
        <Firma />
      </div>
    </nav>
  );
};

export default NavBar;
