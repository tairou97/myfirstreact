import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <NavLink to="/about-us" style={{ color: "black" }}>
        Go to About Us
      </NavLink>
      <h1>Willkommen auf unserer Webseite!</h1>
      <p>
        Wir sind [Name deines Unternehmens oder Projekts], ein engagiertes Team
        von [Beschreibe deine Tätigkeit oder deine Branche]. Unser Ziel ist es,
        [Beschreibe das Ziel oder den Zweck deines Unternehmens oder Projekts].
        Entdecke unsere Projekte, lerne mehr über unsere Arbeit und kontaktiere
        uns, um mehr zu erfahren. Wir freuen uns darauf, von dir zu hören!
      </p>
    </>
  );
};

export default HomePage;
