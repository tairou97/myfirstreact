import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <h1>Über uns</h1>
      <Link to="/" style={{ color: "black" }}>
        Go to home
      </Link>
      <p>
        Bei [Name deines Unternehmens oder Projekts] glauben wir an [Beschreibe
        deine Werte oder Vision]. Seit [Gründungsjahr] arbeiten wir daran,
        [Beschreibe deine Mission oder dein Engagement]. Unser Team besteht aus
        [Beschreibe dein Team, z. B. Fachleuten, Enthusiasten usw.], die
        [Beschreibe, was dein Team auszeichnet]. Erfahre mehr über unsere
        Geschichte, unsere Werte und unsere Vision für die Zukunft.
      </p>
    </>
  );
};

export default AboutUs;
