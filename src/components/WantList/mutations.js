import gql from "graphql-tag";

const createWantListCard = gql`
  mutation CreateWantListCard($input: CreateWantListCardInput!) {
    createWantListCard(input: $input) {
      id
    }
  }
`;

const updateWantListCard = gql`
  mutation updateWantListCard($input: UpdateWantListCardInput!) {
    updateWantListCard(input: $input) {
      id
      budgetHigh
      budgetLow
      willTradeFor
      willBuy
      cardGradeId
      isHigher
    }
  }
`;

const deleteWantListCard = gql`
  mutation DeleteWantListCard($input: DeleteWantListCardInput!) {
    deleteWantListCard(input: $input) {
      id
    }
  }
`;

export { createWantListCard, deleteWantListCard, updateWantListCard };
