import { CurrentUserContext } from "contexts/CurrentUser";
import WantListList from "components/WantList/List";
import { useContext } from "react";

const WantList = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return !!currentUser ? <WantListList /> : null;
};

export default WantList;
