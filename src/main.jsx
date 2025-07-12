import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactQuery from "./lib/reactQuery.jsx";
import { ShipsProvider } from "./context/ShipsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactQuery>
      <BrowserRouter>
        <ShipsProvider>
          <App />
        </ShipsProvider>
      </BrowserRouter>
    </ReactQuery>
  </React.StrictMode>
);
