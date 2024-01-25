import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "Click Me to visit Google",
};
const AnotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit Google
  </a>
);

const areactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "Click Me to visit Google"
);

const MyApp = () => {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
};

export default MyApp;
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
