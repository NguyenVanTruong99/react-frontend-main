import {
  getUserCard,
  listMyStagedUserCards,
} from "components/UserCard/queries";
import { useMutation, useQuery } from "@apollo/client";

import UserCardEditGradeView from "./UserCardEditGradeView";
import { listCardGradesByCardId } from "components/CardGrade/queries";
import { listGrades } from "components/Grade/queries";
import { updateUserCard } from "components/UserCard/mutations";
import { useState } from "react";

const UserCardEditGradeContainer = ({ userCardId, control }) => {
  const { error, data: { listGrades: grades = [] } = {} } =
    useQuery(listGrades);

  const { data: { getUserCard: userCard } = {} } = useQuery(getUserCard, {
    variables: {
      id: userCardId,
    },
  });

  const [graded, setGraded] = useState(
    !!userCard?.cardGrade || !!userCard?.boundGrade
  );

  const toggleGraded = () => {
    setGraded(!graded);
  };

  const { data: { listCardGradesByCardId: cardGrades = [] } = {} } = useQuery(
    listCardGradesByCardId,
    {
      // pollInterval: 5000,
      skip: !userCard?.cardId,
      variables: {
        cardId: userCard?.cardId,
      },
    }
  );

  const [update] = useMutation(updateUserCard, {
    refetchQueries: [
      {
        query: listMyStagedUserCards,
        variables: {
          offsetAttributes: {
            limit: 100,
          },
        },
      },
    ],
  });

  return !userCard ? null : (
    <UserCardEditGradeView
      userCard={userCard}
      control={control}
      graded={graded}
      toggleGraded={toggleGraded}
      allGrades={[
        ...new Map(
          [...cardGrades.map(cg => cg.grade), ...grades].map(item => [
            item.id,
            item,
          ])
        ).values(),
      ]}
    />
  );
};

export default UserCardEditGradeContainer;
