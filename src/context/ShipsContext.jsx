import { useState } from "react";
import { createContext } from "react";

const ShipsContext = createContext();

function ShipsProvider({ children }) {
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
    <ShipsContext.Provider value={store}>
      {children}
    </ShipsContext.Provider>
  );
}

export { ShipsProvider, ShipsContext };
