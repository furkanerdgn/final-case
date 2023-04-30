import { useState } from "react";
import { createContext } from "react";

const StarshipContext = createContext();

function ShipsContext({ children }) {
  const [search, setSearch] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const store = {
    search,
    isPressed,
    setIsPressed,
    setSearch,
    isSubmit,
    setIsSubmit,
  };

  return (
    <StarshipContext.Provider value={store}>
      {children}
    </StarshipContext.Provider>
  );
}

export { ShipsContext, StarshipContext };
