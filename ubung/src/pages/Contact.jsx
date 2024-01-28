import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <Link to="/" style={{ color: "black" }}>
        Go to home
      </Link>
      <h1>Kontaktiere uns</h1>
      <p>
        Möchtest du mehr über unsere Arbeit erfahren oder eine Zusammenarbeit
        besprechen? Zögere nicht, uns zu kontaktieren! Du kannst uns per E-Mail
        unter [E-Mail-Adresse] erreichen oder das Kontaktformular unten nutzen.
        Wir sind immer offen für neue Ideen, Partnerschaften und Möglichkeiten.
        Wir freuen uns darauf, von dir zu hören und gemeinsam etwas Besonderes
        zu schaffen! Bitte beachte, dass diese Texte nur als Beispiel dienen und
        je nach den spezifischen Details deines Unternehmens oder Projekts
        angepasst werden müssen.
      </p>
    </div>
  );
};

export default Contact;
