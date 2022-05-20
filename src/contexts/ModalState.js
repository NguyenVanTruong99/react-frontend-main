import { createContext, useState } from "react";

const ModalStateContext = createContext();

const ModalStateProvider = ({ children }) => {
  const [addShowcaseModalOpen, setAddShowcaseModalOpen] = useState(false);

  return (
    <ModalStateContext.Provider
      value={{ addShowcaseModalOpen, setAddShowcaseModalOpen }}
    >
      <>{children}</>
    </ModalStateContext.Provider>
  );
};

export { ModalStateContext, ModalStateProvider };
