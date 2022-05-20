import { useQuery } from "@apollo/client";
import { listCards } from "../queries";
import CardListView from "./CardListView";

const CardListContainer = ({ limit = 10, offset = 0 } = {}) => {
  const { error, data: { listCards: cards = [] } = {} } = useQuery(listCards, {
    variables: {
      offsetAttributes: {
        offset,
        limit,
      },
    },
  });

  !!error && console.error("error", error);

  return <CardListView cards={cards} />;
};

export default CardListContainer;
