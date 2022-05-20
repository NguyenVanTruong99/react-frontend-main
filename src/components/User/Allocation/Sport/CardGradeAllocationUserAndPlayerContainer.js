import { useQuery } from "@apollo/client";
import DataAllocation from "components/Data/Allocation";
import { getUser } from "components/User/queries";
import { useCallback, useState } from "react";

const groupByNameAndYear = arr =>
  arr.reduce((acc, cval) => {
    const myAttribute = `${cval.name} ${cval.year}`;
    acc[myAttribute] = [...(acc[myAttribute] || []), cval];
    return acc;
  }, {});

const groupByGradeAndVendor = arr =>
  arr.reduce((acc, cval) => {
    const myAttribute = `${cval.gradeVendor.name} ${cval.grade.grade}`;
    acc[myAttribute] = [...(acc[myAttribute] || []), cval];
    return acc;
  }, {});

const tabLabels = ["Grade", "Set"];

const CardGradeAllocationUserAndPlayerContainer = ({ playerId, userId }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const { error, data: { getUser: user } = {} } = useQuery(getUser, {
    variables: {
      playerId,
      id: userId,
    },
  });

  !!error && console.error(error);

  const data =
    tabIndex === 1
      ? Object.entries(groupByNameAndYear(user?.cardSets ?? [])).map(
          ([key, value]) => ({
            name: key,
            value: value.length,
          })
        )
      : Object.entries(groupByGradeAndVendor(user?.cardGrades ?? [])).map(
          ([key, value]) => ({
            name: key,
            value: value.length,
          })
        );

  const handleTabChange = useCallback(tabIndex => setTabIndex(tabIndex), []);

  return (
    <DataAllocation
      onTabChange={handleTabChange}
      isMoney={false}
      data={data}
      tabLabels={tabLabels}
    />
  );
};

export default CardGradeAllocationUserAndPlayerContainer;
