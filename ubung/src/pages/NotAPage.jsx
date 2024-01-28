import React from "react";
import { Link } from "react-router-dom";

const NotAPage = () => {
  return (
    <div>
      <Link to="/">Go to home</Link>
      <h1>404</h1>
      <h3>this page is not found</h3>
    </div>
  );
};

export default NotAPage;
