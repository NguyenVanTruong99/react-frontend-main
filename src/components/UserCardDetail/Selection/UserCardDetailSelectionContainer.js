import UserCardDetailSelectionView from "./UserCardDetailSelectionView";
import { getUserCard } from "components/UserCard/queries";
import { useQuery } from "@apollo/client";

import { listUserCardDetails } from "../queries";

const UserCardDetailSelectionContainer = ({ userCardId }) => {
  const { data: { listUserCardDetails: userCardDetails = [] } = {} } =
    useQuery(listUserCardDetails);
  const { data: { getUserCard: userCard } = {} } = useQuery(getUserCard, {
    variables: {
      id: userCardId,
    },
  });

  return (
    <UserCardDetailSelectionView
      userCard={userCard}
      userCardDetails={userCardDetails}
    />
  );
};

export default UserCardDetailSelectionContainer;
