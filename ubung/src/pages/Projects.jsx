import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <Link to="/" style={{ color: "black" }}>
        Go to home
      </Link>
      <h1>Unsere Projekte</h1>
      <p>
        Bei [Name deines Unternehmens oder Projekts] haben wir an verschiedenen
        Projekten gearbeitet, um [Beschreibe den Zweck oder das Ergebnis der
        Projekte]. Hier sind einige unserer herausragenden Projekte:
        [Projektname]: Beschreibung des Projekts und seiner Ziele.
        [Projektname]: Beschreibung des Projekts und seiner Ziele.
        [Projektname]: Beschreibung des Projekts und seiner Ziele. Erfahre mehr
        über unsere abgeschlossenen und laufenden Projekte und die Ergebnisse,
        die wir erzielt haben.
      </p>
    </div>
  );
};

export default Projects;
