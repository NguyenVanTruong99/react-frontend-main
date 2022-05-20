import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { updateUserCard } from "components/UserCard/mutations";
import CardSearch from "components/Card/Search";
import { getUserCard } from "components/UserCard/queries";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";

const MatchUserCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [matchUserCard] = useMutation(updateUserCard);
  const { data: { getUserCard: userCard } = {} } = useQuery(getUserCard, {
    variables: {
      id,
    },
  });

  const handleCardSelect = useCallback(
    card =>
      matchUserCard({
        variables: {
          input: {
            id,
            cardId: card.id,
          },
        },
      }).then(() => navigate(-1)),
    [id, matchUserCard, navigate]
  );

  return (
    <Box mt={12}>
      {!!userCard && (
        <CardSearch
          initialTerm={`${userCard.playerName ?? ""} ${userCard.year ?? ""} ${
            userCard.cardSetName ?? ""
          } `}
          onSelectCard={handleCardSelect}
        />
      )}
    </Box>
  );
};

export default MatchUserCard;
