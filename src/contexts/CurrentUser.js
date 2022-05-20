import React, { useCallback, useEffect, useMemo, useState } from "react";
import LogRocket from "logrocket";

const CurrentUserContext = React.createContext();

const CurrentUserProvider = ({ children }) => {
  const [currentUserString, setCurrentUserString] = useState(
    localStorage.getItem("currentUser")
  );

  const signIn = useCallback(data => {
    setCurrentUserString(JSON.stringify(data));

    !!data?.authenticatable?.id &&
      LogRocket.identify(data.authenticatable.id, {
        email: data.authenticatable.email,
      });
  }, []);

  const signOut = useCallback(() => setCurrentUserString(""), []);

  const setIsOnboarded = useCallback(
    value => {
      let currentUserData = !!currentUserString
        ? JSON.parse(currentUserString)
        : null;

      if (currentUserData) {
        currentUserData.authenticatable.isOnboarded = value;
      }

      setCurrentUserString(JSON.stringify(currentUserData));
    },
    [currentUserString]
  );

  const isOnboarded = (
    !!currentUserString ? JSON.parse(currentUserString) : null
  )?.authenticatable?.isOnboarded;

  const userData = useMemo(
    () => ({
      signIn,
      signOut,
      setIsOnboarded,
      isOnboarded,
      currentUser: !!currentUserString ? JSON.parse(currentUserString) : null,
    }),
    [currentUserString, isOnboarded, setIsOnboarded, signOut, signIn]
  );

  useEffect(() => {
    !!currentUserString
      ? localStorage.setItem("currentUser", currentUserString)
      : localStorage.removeItem("currentUser");
  }, [currentUserString]);

  return (
    <CurrentUserContext.Provider value={userData}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserContext, CurrentUserProvider };
