import { useCallback, useEffect, useState } from "react";

import DataMovementChart from "components/Data/MovementChart";
import { DateTime } from "luxon";
import { listUserValuesByUserId } from "../queries";
import { useQuery } from "@apollo/client";

const tabLabels = [
  // "1d",
  // "7d",
  "2w",
  "30d",
  "60d",
  "3m",
  "6m",
  "1y",
  "All",
];

const tabNames = [
  // "1d",
  // "7d",
  "2 weeks",
  "30 days",
  "60 days",
  "3 months",
  "6 months",
  "1 year",
  "All Time",
];

const fillData = (items, startDate, endDate) =>
  items
    .map(item => {
      // const valuedStartDate = /1776/.test(item.valuedStartDate.toString()) ? startDate : DateTime.fromISO(item.valuedStartDate) < startDate ? startDate : DateTime.fromISO(item.valuedStartDate);
      // const valuedEndDate = /2076/.test(item.valuedEndDate.toString()) ? endDate : DateTime.fromISO(item.valuedEndDate) > endDate ? endDate : DateTime.fromISO(item.valuedEndDate);

      return {
        name: DateTime.fromISO(item.valuedDate).toLocaleString(
          DateTime.DATE_SHORT
        ),
        value: item.value,
      };
    })
    .flat(10000);

const UserValueChartContainer = ({ userId, onStartDateChange, sportId }) => {
  const [startDate, setStartDate] = useState(null);
  const [tab, setTab] = useState(null);
  const { error, data: { listUserValuesByUserId: items = [] } = {} } = useQuery(
    listUserValuesByUserId,
    {
      skip: !userId || !startDate,
      variables: {
        userId,
        startDate: !!startDate ? startDate.toISO() : undefined,
        sportId,
      },
    }
  );

  const handleTabChange = useCallback(
    tab => [
      setTab(tab),
      /All/i.test(tabLabels[tab])
        ? setStartDate(DateTime.now().minus({ days: 1000 }))
        : /w/i.test(tabLabels[tab])
        ? setStartDate(
            DateTime.now().minus({
              days: parseInt(tabLabels[tab].replace(/w/i, "")) * 7,
            })
          )
        : /m/i.test(tabLabels[tab])
        ? setStartDate(
            DateTime.now().minus({
              days: parseInt(tabLabels[tab].replace(/m/i, "")) * 30,
            })
          )
        : /y/i.test(tabLabels[tab])
        ? setStartDate(
            DateTime.now().minus({
              days: parseInt(tabLabels[tab].replace(/y/i, "")) * 365,
            })
          )
        : /d/i.test(tabLabels[tab])
        ? setStartDate(
            DateTime.now().minus({
              days: parseInt(tabLabels[tab].replace(/d/i, "")),
            })
          )
        : null,
    ],
    []
  );

  const endDate = DateTime.now();

  useEffect(() => {
    !!onStartDateChange && onStartDateChange(startDate);
  }, [onStartDateChange, startDate]);

  !!error && console.error(error);

  return (
    <DataMovementChart
      data={fillData(items, startDate, endDate)}
      onTabChange={handleTabChange}
      tabLabels={tabLabels}
      skipMovementText={true}
    />
  );
};

export default UserValueChartContainer;
