import SaleHistoryView from "./SaleHistoryView";
import { saleHistoryItemFragment } from "./Item/SaleHistoryItemView"
import { gql, useQuery } from "@apollo/client";
import { useScrollToBottom } from "use-scroll-to-bottom";
import { useEffect } from "react";

const query = gql`
  query ListCardGradesByCardId(
    $cardGradeId: ID!
    $startDate: ISO8601DateTime
    $after: String
  ) {
    listSalesByCardGradeId(
      cardGradeId: $cardGradeId
      startDate: $startDate
      after: $after
      first: 12
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          ...SaleHistoryItemFragment
        }
      }
    }
  }
  ${saleHistoryItemFragment}
`;

const SaleHistoryContainer = ({
  cardGradeId,
  startDate,
  timeframeInWords,
  Adornment,
}) => {
  const [setBottomRef, isBottom] = useScrollToBottom();
  const {
    fetchMore,
    error,
    data: { listSalesByCardGradeId: sales } = {},
  } = useQuery(query, {
    skip: !cardGradeId || !startDate,
    variables: {
      cardGradeId,
      startDate: !!startDate ? startDate.toISO() : undefined,
    },
  });
  const endCursor = sales?.pageInfo?.endCursor;

  !!error && console.error(error);

  useEffect(() => {
    !!endCursor &&
      !!isBottom &&
      fetchMore({
        variables: {
          after: endCursor,
        },
      });
  }, [fetchMore, endCursor, isBottom]);

  return (
    <SaleHistoryView
      sales={sales}
      timeframeInWords={timeframeInWords}
      Adornment={Adornment}
      setBottomRef={setBottomRef}
    />
  );
};

export default SaleHistoryContainer;
