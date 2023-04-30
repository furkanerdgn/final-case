import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Background from "./pages/StarBackGround";
import Ship from "./pages/Ship/index";
import NotFound from "./pages/error";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ships/:id",
        element: <Ship />,
      },
    ],
  },
  {
    path: "/credits",
    element: <Background />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
