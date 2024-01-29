import Home from "../pages/Home";
import Leistungen from "../pages/Leistungen";
import Profil from "../pages/Profil";
import Kontakt from "../pages/Kontakt";
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", element: <Home />, Id: 1 },
  { path: "/leistungen", element: <Leistungen />, id: 2 },
  { path: "/profil", element: <Profil />, id: 3 },
  { path: "kontakt", element: <Kontakt />, Id: 4 },
  { path: "/impressum", element: <Impressum />, id: 5 },
  { path: "/datenschutz", element: <Datenschutz />, id: 6 },
  { path: "*", element: <PageNotFound />, id: 6 },
];

<Route path="/" element={<Home />} />;

export default routes;
