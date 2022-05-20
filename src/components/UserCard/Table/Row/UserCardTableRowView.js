import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";

import CardBasicDetail from "components/Card/BasicDetail";
import { DateTime } from "luxon";
import GradeBadge from "components/Grade/Badge";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import OutlineNotch from "assets/images/notches/small.png";
import PlayerImg from "assets/images/Player.png";
import Tooltip from "@mui/material/Tooltip";
import { USER_CARD_TABLE_COLS } from "constants/cards";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import addCommas from "utils/addCommas";
import formatCardStatus from "utils/formatCardStatus";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";
import styles from "./UserCardTableRowStyles";

const UserCardTableRowView = ({
  handleCardClick,
  handleRowClicked,
  handleRowToggled,
  isSelected,
  item,
  RowActionComponent,
  selectable,
  theme,
  visibleColumns,
  widthStyle,
}) => (
  <TableRow
    onClick={e => (!!handleRowClicked ? handleRowClicked(item) : null)}
    hover={!!handleRowClicked}
    sx={!!handleRowClicked ? { ...styles.clickable } : {}}
  >
    {selectable && (
      <TableCell sx={styles.checkboxCell}>
        <Checkbox
          color="primary"
          checked={isSelected}
          onChange={() => handleRowToggled(item)}
          inputProps={{}}
        />
      </TableCell>
    )}
    {visibleColumns.map((visibleColumn, idx) => {
      switch (visibleColumn) {
        case USER_CARD_TABLE_COLS.DETAILS:
          return (
            <TableCell
              key={idx}
              align="left"
              sx={{
                ...styles.cardDetail,
                ...(selectable ? {} : { left: 0 }),
              }}
              onClick={e =>
                handleCardClick(e, `/collectors-cards/${item.userCard.id}`)
              }
            >
              <CardBasicDetail
                cardFrontImageUrl={
                  item?.userCard?.userCardImages?.find?.(
                    uci => uci.view === "front"
                  )?.imageUrl || item?.userCard?.card?.frontUrl
                }
                cardName={item?.userCard?.card?.name}
                cardNumber={item?.userCard?.card?.cardNumber}
                cardSetName={item?.userCard?.card?.cardSet?.name}
                cardSetVariety={item?.userCard?.card?.cardSet?.variety}
                cardSetYear={item?.userCard?.card?.cardSet?.year}
              />
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.GRADE:
          return (
            <TableCell key={idx} sx={widthStyle}>
              {!!item.userCard.displayGrade ? (
                <GradeBadge
                  grade={item.userCard.displayGrade?.grade}
                  gradeVendor={item.userCard.displayGrade?.gradeVendor?.name}
                  width="40px"
                  height="40px"
                />
              ) : (
                "-"
              )}
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.SPORT:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {item.userCard.card?.cardSet.sport?.name || "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.YEAR:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {item.userCard.card?.cardSet?.year || "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.PAID:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {item.userCard.purchasePrice
                  ? formatNumberAsCurrency(item.userCard.purchasePrice)
                  : "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.POP:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {addCommas(item.userCard.cardGrade?.gradePop) || "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.SET:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {item.userCard.card?.cardSet?.name || "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.VARIETY:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {item.userCard.card?.cardSet?.variety || "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.PLAYER:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {!!item?.userCard?.card?.players?.length
                  ? item?.userCard?.card?.players
                      ?.map?.(player => player.fullName)
                      ?.join?.(", ")
                  : "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.NUMBER:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {item.userCard.card?.cardNumber || "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.CREATED_AT:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {DateTime.fromISO(item.userCard.createdAt)?.toLocaleString(
                  DateTime.DATE_FULL
                ) || "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.STATUS:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Typography variant="cardMd">
                {formatCardStatus(item.userCard.cardStatus) || "-"}
              </Typography>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.COMP_VALUE:
          return (
            <TableCell key={idx} sx={widthStyle}>
              {item?.userCard?.cardGrade?.currentValue ? (
                <Typography variant="cardMd">
                  {formatNumberAsCurrency(
                    item?.userCard?.cardGrade?.currentValue
                  )}
                </Typography>
              ) : (
                <Tooltip
                  disableFocusListener
                  enterTouchDelay={0}
                  placement="top"
                  title={"We're finding your comp, check back later!"}
                >
                  <ModelTrainingIcon
                    style={{ color: theme.palette.primary.main }}
                  ></ModelTrainingIcon>
                </Tooltip>
              )}
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.SHOWCASE_COUNT:
          return (
            <TableCell key={idx} sx={widthStyle}>
              {item?.userCard?.showcaseCount > 0 ? (
                <Box sx={{ display: "flex" }}>
                  <Typography variant="cardMd">
                    {item.userCard.showcaseCount}
                  </Typography>
                </Box>
              ) : (
                "-"
              )}
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.OWNER:
          return (
            <TableCell key={idx} sx={widthStyle}>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  position: "relative",
                  overflow: "hidden",
                }}
                onClick={e =>
                  handleCardClick(e, `/users/${item.userCard.user.id}`)
                }
              >
                <img
                  src={
                    item?.userCard?.user?.approvedProfileImages?.length > 0
                      ? item?.userCard?.user?.approvedProfileImages[0]?.imageUrl
                      : PlayerImg
                  }
                  style={{
                    position: "absolute",
                    width: "59px",
                    top: "8px",
                    left: "11px",
                  }}
                  alt=""
                />
                <img
                  src={OutlineNotch}
                  style={{ position: "relative", height: "100%" }}
                  alt=""
                />
              </Box>
            </TableCell>
          );
        case USER_CARD_TABLE_COLS.PUBLIC:
          return (
            <TableCell key={idx} sx={widthStyle}>
              {item?.userCard?.isPublic ? (
                <VisibilityOutlinedIcon
                  style={{ color: theme.palette.primary.main }}
                ></VisibilityOutlinedIcon>
              ) : (
                <VisibilityOffOutlinedIcon
                  style={{ color: theme.palette.primary.main }}
                ></VisibilityOffOutlinedIcon>
              )}
            </TableCell>
          );
        default:
          return <TableCell key={idx} sx={widthStyle} />;
      }
    })}
    {RowActionComponent && (
      <TableCell>
        <RowActionComponent item={item} />
      </TableCell>
    )}
  </TableRow>
);

export default UserCardTableRowView;
