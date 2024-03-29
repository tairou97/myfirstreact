import { Route, Routes } from "react-router-dom";
import routes from "./components/routes";
import Layout from "./Layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((rou) => (
          <Route key={rou.Id} {...rou} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
