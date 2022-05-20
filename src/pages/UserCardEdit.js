import UserCardEditDetails from "components/UserCard/Edit/Details";
import { useParams } from "react-router";

const UserCardEdit = () => {
  const { id } = useParams();

  return (
    <>
      <UserCardEditDetails userCardId={id} />
    </>
  );
};

export default UserCardEdit;
