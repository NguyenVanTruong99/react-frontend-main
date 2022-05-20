import { useParams } from "react-router";
import { CurrentUserContext } from "contexts/CurrentUser";
import ShowcaseList from "components/Showcase/List";
import { useContext } from "react";

const Showcases = () => {
  const { userId } = useParams();
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <ShowcaseList
      view="yours"
      userId={userId ?? currentUser?.authenticatable?.id}
    />
  );
};

export default Showcases;
