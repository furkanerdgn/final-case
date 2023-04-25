import Layout from "./pages/Layout";


const routes = [
    {
        path: "/",
        element: <Layout/>, 
    },
    {
        path: "*",
        //element: NotFound,
    },
    {
        path: "/ships/:id",
        //element: Ship,
    },
];

export default routes;
