import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";

function App() {
  const showRoutes = useRoutes(routes);

  return <>{showRoutes}</>;
}

export default App;
