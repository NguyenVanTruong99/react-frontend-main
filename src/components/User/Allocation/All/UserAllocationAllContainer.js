import { useCallback, useMemo, useState } from "react";

import DataAllocation from "components/Data/Allocation";
import { getUserWithCardGrades } from "components/User/queries";
import { useQuery } from "@apollo/client";
import { useTheme } from "@mui/system";

const groupByNameAndYear = arr =>
  arr.reduce((acc, cval) => {
    const myAttribute = `${cval.card.name} ${cval.card.cardSet.year} ${cval.card.cardSet.name}`;
    acc[myAttribute] = [...(acc[myAttribute] || []), cval];
    return acc;
  }, {});

const groupByPlayer = arr =>
  arr.reduce((acc, cval) => {
    const myAttribute = `${cval.card.name}`;
    acc[myAttribute] = [...(acc[myAttribute] || []), cval];
    return acc;
  }, {});

const groupBySport = arr =>
  arr.reduce((acc, cval) => {
    const myAttribute = `${cval.card.cardSet.sport.name}`;
    acc[myAttribute] = [...(acc[myAttribute] || []), cval];
    return acc;
  }, {});

const groupByGrade = arr =>
  arr.reduce((acc, cval) => {
    const myAttribute = `${cval.grade.gradeVendor.name} ${cval.grade.gradeDisplay}`;
    acc[myAttribute] = [...(acc[myAttribute] || []), cval];
    return acc;
  }, {});

const UserAllocationAllContainer = ({
  sportId,
  userId,
  startDate,
  isMobile,
}) => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = sportId =>
    !sportId
      ? ["Sport", "Players", "By Value"]
      : ["Players", "By Value", "Grade"];
  const tabLabels = useMemo(() => tabs(sportId), [sportId]); //TODO: refactor - not how memos work

  const { error, data: { getUser: user } = {} } = useQuery(
    getUserWithCardGrades,
    {
      variables: {
        sportId,
        id: userId,
      },
    }
  );

  // const {error, data: {listUserValuesByUserId: items = []} = {}} = useQuery(listUserValuesByUserId, {
  //   skip: !userId || !startDate,
  //   variables: {
  //     userId,
  //     startDate: !!startDate ? startDate.toISO() : undefined
  //   }
  // });

  // !!error && console.error(error)

  // console.log("user?.cardGrades", user?.cardGrades)

  const data =
    !!sportId ?
      tabIndex === 2
        ? !!sportId
          ? Object.entries(groupByGrade(user?.cardGrades ?? [])).map(
            ([key, value]) => ({
              name: key,
              value: value
                .map(v => v.currentValue || (v.userCard?.purchasePrice ?? 0))
                .reduce(
                  (previousValue, currentValue) =>
                    (previousValue ?? 0) + currentValue
                ),
            })
          )
          : Object.entries(groupBySport(user?.cardGrades ?? [])).map(
            ([key, value]) => ({
              name: key,
              value: value
                .map(v => v.currentValue || (v.userCard?.purchasePrice ?? 0))
                .reduce(
                  (previousValue, currentValue) =>
                    (previousValue ?? 0) + currentValue
                ),
            })
          )
        : tabIndex === 1
          ? Object.entries(groupByNameAndYear(user?.cardGrades ?? [])).map(
            ([key, value]) => ({
              name: key,
              value: value
                .map(v => v.currentValue || (v.userCard?.purchasePrice ?? 0))
                .reduce(
                  (previousValue, currentValue) =>
                    (previousValue ?? 0) + currentValue
                ),
            })
          )
          : Object.entries(groupByPlayer(user?.cardGrades ?? [])).map(
            ([key, value]) => ({
              name: key,
              value: value
                .map(v => v.currentValue || (v.userCard?.purchasePrice ?? 0))
                .reduce(
                  (previousValue, currentValue) =>
                    (previousValue ?? 0) + currentValue
                ),
            })
          )
      :
      tabIndex === 2
        ?
        Object.entries(groupByNameAndYear(user?.cardGrades ?? [])).map(
          ([key, value]) => ({
            name: key,
            value: value
              .map(v => v.currentValue || (v.userCard?.purchasePrice ?? 0))
              .reduce(
                (previousValue, currentValue) =>
                  (previousValue ?? 0) + currentValue
              ),
          })
        )
        : tabIndex === 1
          ?
          Object.entries(groupByPlayer(user?.cardGrades ?? [])).map(
            ([key, value]) => ({
              name: key,
              value: value
                .map(v => v.currentValue || (v.userCard?.purchasePrice ?? 0))
                .reduce(
                  (previousValue, currentValue) =>
                    (previousValue ?? 0) + currentValue
                ),
            })
          )
          :
          Object.entries(groupBySport(user?.cardGrades ?? [])).map(
            ([key, value]) => ({
              name: key,
              value: value
                .map(v => v.currentValue || (v.userCard?.purchasePrice ?? 0))
                .reduce(
                  (previousValue, currentValue) =>
                    (previousValue ?? 0) + currentValue
                ),
            })
          );

  const handleTabChange = useCallback(tabIndex => setTabIndex(tabIndex), []);

  const cutOff = 4;
  
  const formattedData = [
    ...data
      .slice(0)
      .sort((a, b) => (a.value > b.value ? -1 : 1))
      .slice(0, cutOff),
    data?.length <= cutOff
      ? null
      : {
          name: "Other",
          value: data
            .slice(0)
            .sort((a, b) => (a.value > b.value ? -1 : 1))
            .slice(cutOff)
            .map(d => d.value)
            .reduce(
              (previousValue, currentValue) =>
                (previousValue ?? 0) + currentValue
            ),
        },
  ].filter(v => !!v);

  const colors =
    !sportId && tabIndex === 0
      ? formattedData.map(
        ({ name }) => theme.palette.sports[name.toLowerCase()]
      )
      : undefined;

  return (
    <DataAllocation
      colors={colors}
      onTabChange={handleTabChange}
      isMoney={true}
      data={formattedData}
      tabLabels={tabLabels}
      isSport={!!sportId}
      isMobile={isMobile}
    />
  );
};

export default UserAllocationAllContainer;
