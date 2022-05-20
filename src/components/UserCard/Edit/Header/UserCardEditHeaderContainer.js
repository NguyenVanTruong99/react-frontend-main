import { useQuery } from "@apollo/client";
import { getUserCard } from "components/UserCard/queries";
import UserCardEditHeaderView from "./UserCardEditHeaderView";

const UserCardEditHeaderContainer = ({ userCardId }) => {
  const { data: { getUserCard: userCard } = {} } = useQuery(getUserCard, {
    variables: {
      id: userCardId,
    },
  });

  return !userCard ? null : <UserCardEditHeaderView userCard={userCard} />;
};

export default UserCardEditHeaderContainer;
