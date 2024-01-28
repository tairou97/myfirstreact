import { Routes, Route } from "react-router-dom";
import routes from "./components/routes";

import Layout from "./Layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
