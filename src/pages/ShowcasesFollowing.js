import { useParams } from "react-router";
import { CurrentUserContext } from "contexts/CurrentUser";
import ShowcaseList from "components/Showcase/List";
import { useContext } from "react";

const ShowcasesFollowing = () => {
  const { userId } = useParams();
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <ShowcaseList
      view="following"
      userId={userId ?? currentUser?.authenticatable?.id}
    />
  );
};

export default ShowcasesFollowing;
