import { useQuery } from "@apollo/client";
import DataMovementChart from "components/Data/MovementChart";
import { listCompsByCardGradeId } from "../queries";
import { DateTime } from "luxon";
import { useCallback, useState } from "react";

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

const getTicks = (items, startDate, endDate) =>
  items
    .map(item => {
      const valuedStartDate = /1776/.test(item.valuedStartDate.toString())
        ? startDate
        : DateTime.fromISO(item.valuedStartDate) < startDate
        ? startDate
        : DateTime.fromISO(item.valuedStartDate);
      const valuedEndDate = /2076/.test(item.valuedEndDate.toString())
        ? endDate
        : DateTime.fromISO(item.valuedEndDate) > endDate
        ? endDate
        : DateTime.fromISO(item.valuedEndDate);

      const { days } = valuedStartDate.diff(valuedEndDate, "days");

      return [...Array(Math.max(0, Math.floor(Math.abs(days)) - 1)).keys()].map(
        key =>
          valuedStartDate
            .plus({ days: key })
            .toLocaleString(DateTime.DATE_SHORT)
      );
    })
    .flat(10000);

// const fillData = (items, startDate, endDate) =>
//   items.map(item => {
//     const valuedStartDate = /1776/.test(item.valuedStartDate.toString()) ? startDate : DateTime.fromISO(item.valuedStartDate) < startDate ? startDate : DateTime.fromISO(item.valuedStartDate);
//     const valuedEndDate = /2076/.test(item.valuedEndDate.toString()) ? endDate : DateTime.fromISO(item.valuedEndDate) > endDate ? endDate : DateTime.fromISO(item.valuedEndDate);

//     const {days} = valuedStartDate.diff(valuedEndDate, 'days');

//     return [...Array(Math.floor(Math.abs(days))-1).keys()].map(key => ({
//       name: valuedStartDate.plus({days: key}).toLocaleString(DateTime.DATE_SHORT),
//       value: item.value
//     }))
//   })
//     .flat(10000)

const fillData = (items, startDate, endDate) =>
  items
    .map(item => {
      const valuedStartDate = /1776/.test(item.valuedStartDate.toString())
        ? startDate
        : DateTime.fromISO(item.valuedStartDate) < startDate
        ? startDate
        : DateTime.fromISO(item.valuedStartDate);
      // const valuedEndDate = /2076/.test(item.valuedEndDate.toString()) ? endDate : DateTime.fromISO(item.valuedEndDate) > endDate ? endDate : DateTime.fromISO(item.valuedEndDate);

      return {
        name: valuedStartDate.toLocaleString(DateTime.DATE_SHORT),
        value: item.value,
      };
    })
    .flat(10000);

const CompChartContainer = ({ cardGradeId }) => {
  const [startDate, setStartDate] = useState(null);
  const { error, data: { listCompsByCardGradeId: items = [] } = {} } = useQuery(
    listCompsByCardGradeId,
    {
      skip: !cardGradeId || !startDate,
      variables: {
        cardGradeId,
        startDate: !!startDate ? startDate.toISO() : undefined,
      },
    }
  );

  const handleTabChange = useCallback(
    tab =>
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
    []
  );

  const endDate = DateTime.now();

  !!error && console.error(error);

  return (
    <DataMovementChart
      data={fillData(items, startDate, endDate)}
      ticks={getTicks(items, startDate, endDate)}
      onTabChange={handleTabChange}
      tabLabels={tabLabels}
    />
  );
};

export default CompChartContainer;
