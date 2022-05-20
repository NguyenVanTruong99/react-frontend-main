import React, { useCallback, useState } from "react";

const StagedUserCardsContext = React.createContext();

const StagedUserCardsProvider = ({ children }) => {
  const [userCards, setUserCards] = useState([]);

  const clearUserCards = useCallback(() => setUserCards([]), []);

  const addUserCard = useCallback(
    userCard => setUserCards(userCards => [userCard, ...userCards]),
    []
  );

  const removeUserCard = useCallback(
    userCard =>
      setUserCards(userCards => userCards.filter(uc => uc.id !== userCard.id)),
    []
  );

  return (
    <StagedUserCardsContext.Provider
      value={{ userCards, addUserCard, clearUserCards, removeUserCard }}
    >
      {children}
    </StagedUserCardsContext.Provider>
  );
};

export { StagedUserCardsContext, StagedUserCardsProvider };
