import { useQuery } from "@apollo/client";
import { getUserCard } from "components/UserCard/queries";
import { useParams } from "react-router";
import CardDetail from "components/Card/Detail";

const UserCardDetail = () => {
  const { id } = useParams();

  const { data: { getUserCard: userCard } = {} } = useQuery(getUserCard, {
    variables: {
      id,
    },
  });

  const card = userCard?.card;

  return !card ? null : <CardDetail cardId={card.id} userCardId={id} />;
};

export default UserCardDetail;
