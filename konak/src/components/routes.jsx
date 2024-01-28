import Home from "../pages/Home";
import Leistungen from "../pages/Leistungen";
import Profil from "../pages/Profil";
import Kontakt from "../pages/Kontakt";
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", element: <Home />, Id: 1 },
  { path: " /unsere-leistungen", element: <Leistungen />, Id: 2 },
  { path: "/profil", element: <Profil />, Id: 3 },
  { path: "/kontakt", element: <Kontakt />, Id: 4 },
  {
    path: "/impressum",
    element: <Impressum />,
    Id: 5,
  },
  {
    path: "/datenschutz",
    element: <Datenschutz />,
    Id: 6,
  },
  {
    path: "*",
    element: <PageNotFound />,
    Id: 7,
  },
];

export default routes;
