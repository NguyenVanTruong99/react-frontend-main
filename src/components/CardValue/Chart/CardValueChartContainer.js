import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CancelIcon from "@mui/icons-material/Cancel";
import CardGradeDataSummary from "components/CardGrade/DataSummary";
import DataMovementChart from "components/Data/MovementChart";
import { DateTime } from "luxon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SaleHistory from "components/Sale/History";
import SalesHistoryIcon from "assets/images/icons/sales-history.svg";
import { getCardGrade } from "components/CardGrade/queries";
import { listCardValuesByCardGradeId } from "../queries";
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
        value: item.avgSale,
      };
    })
    .flat(10000);

const getFirstAvgSale = items => 
  items[0]?.avgSale;

const CardValueChartContainer = ({
  cardGradeId,
  onStartDateChange,
  start,
  selectedVendor,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState(null);
  const { error, data: { listCardValuesByCardGradeId: items = [] } = {} } =
    useQuery(listCardValuesByCardGradeId, {
      skip: !cardGradeId || !startDate,
      variables: {
        cardGradeId,
        startDate: !!startDate ? startDate.toISO() : undefined,
      },
    });

  const { data: { getCardGrade: cardGrade } = {} } = useQuery(
    getCardGrade,
    {
      variables: {
        id: cardGradeId,
        startDate: !!startDate ? startDate.toISO() : undefined,
      },
    }
  );

  const noData = cardGrade?.salesCount === 0;

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

  const handleButtonClick = useCallback(() => setShowModal(true), []);

  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const endDate = DateTime.now();

  const startValue = getFirstAvgSale(items);

  useEffect(() => {
    onStartDateChange(startDate);
  }, [onStartDateChange, startDate]);

  !!error && console.error(error);


  return (
    <Box>
      <DataMovementChart
        data={fillData(items, startDate, endDate)}
        onTabChange={handleTabChange}
        tabLabels={tabLabels}
        skipMovementText={true}
        noData={noData}
        TopExtra={
          <Box display="flex" alignItems="center">
            <Divider
              sx={{
                mb: 3,
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Box>
              <CardGradeDataSummary
                cardGradeId={cardGradeId}
                startDate={startDate}
                startValue={startValue}
                second={true}
                selectedVendor={selectedVendor}
              />
            </Box>
          </Box>
        }
        MidExtra={
          <Box
            sx={{
              display: {
                xs: "block",
                md: "block",
              },
            }}
          >
            <Box sx={{ width: "100%", textAlign: "center", mb: 2 }}>
              <Box
                sx={{
                  borderRadius: "4px",
                  width: "100%",
                  mx: "auto",
                  mt: { md: 0, xs: 2 },
                }}
              >
                <CardGradeDataSummary
                  cardGradeId={cardGradeId}
                  startValue={startValue}
                  startDate={startDate}
                  third={true}
                  startIcon={<img src={SalesHistoryIcon} alt="Sales History" />}
                  onClick={handleButtonClick}
                />
              </Box>
            </Box>
            <Modal
              open={showModal}
              onClick={event => event.stopPropagation()}
            // onClick={setModalOpen.bind(null, false)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: {
                    xs: "100%",
                    md: 600,
                  },
                  height: {
                    xs: "100%",
                    md: "auto",
                  },
                  maxHeight: 600,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 2,
                }}
              >
                <SaleHistory
                  cardGradeId={cardGradeId}
                  startDate={startDate}
                  timeframeInWords={tabNames[tab]}
                  Adornment={
                    <IconButton onClick={handleCloseModal}>
                      <CancelIcon />
                    </IconButton>
                  }
                />
                <Box sx={{ marginTop: "8px" }}>
                  <Typography sx={{ fontSize: { xs: "11px", md: "11px" } }}>
                    *Sales History may not include all transactions during this
                    period.
                  </Typography>
                </Box>
              </Box>
            </Modal>
          </Box>
        }
      // Extra={
      //   <Box
      //     sx={{
      //       display: {
      //         xs: "none",
      //         md: "block"
      //       }
      //     }}
      //   >
      //     <SaleHistory
      //       cardGradeId={cardGradeId}
      //       startDate={startDate}
      //       timeframeInWords={tabNames[tab]}
      //     />
      //   </Box>
      // }
      />
    </Box>
  );
};

export default CardValueChartContainer;
