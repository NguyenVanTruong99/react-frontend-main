import { useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CurrentUserContext } from "contexts/CurrentUser";
import { fetchCurrentUser } from "components/User/queries";

const SessionCheck = () => {
  const userData = useContext(CurrentUserContext);
  const { loading, errors, data } = useQuery(fetchCurrentUser);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!data?.fetchCurrentUser && !checked) {
        userData.signOut();
        setChecked(true);
      }
    }
  }, [loading, data, checked, errors, userData]);

  return null;
};

export default SessionCheck;
