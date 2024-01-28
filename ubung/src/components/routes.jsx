import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import NotAPage from "../pages/NotAPage";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Preis from "../pages/Preis";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/about-us", element: <AboutUs />, id: 2 },
  { path: "/contact", element: <Contact />, id: 3 },
  { path: "/projects", element: <Projects />, id: 4 },
  { path: "/preis", element: <Preis />, id: 5 },
  { path: "*", element: <NotAPage />, id: 6 },
];

export default routes;
