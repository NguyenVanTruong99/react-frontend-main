import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { DateTime } from "luxon";
import GradeBadge from "components/Grade/Badge";
import ShowcaseUserCardCardActionsButton from "components/Showcase/UserCard/Card/ActionsButton";
import Typography from "@mui/material/Typography";

const getGrade = userCard => userCard.cardGrade?.grade ?? userCard.boundGrade;

const UserCollectionCardCardView = ({
  userCollectionCard,
  coverImage,
  onNavigate,
  // onShare
}) => (
  <Card sx={{ width: "100%", position: "relative" }}>
    <ShowcaseUserCardCardActionsButton
      userCollectionCard={userCollectionCard}
    />
    <CardActionArea component={"div"} onClick={onNavigate}>
      <CardContent sx={{ pb: "8px !important" }}>
        <Box
          sx={{
            height: 416,
            position: "relative",
            bgcolor: "background.main",
            width: "calc(100% + 48px)",
            mx: -3,
            py: 4,
            mt: -2,
            mb: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!!coverImage && (
            <img
              src={coverImage}
              style={{
                objectFit: "contain",
                height: "auto",
                maxHeight: "100%",
                maxWidth: "calc(100% - 36px)",
              }}
              alt="cover"
            />
          )}
          {!!getGrade(userCollectionCard.userCard) && (
            <Box
              sx={{
                position: "absolute",
                right: 16,
                bottom: -32,
              }}
            >
              <GradeBadge
                gradeVendor={
                  getGrade(userCollectionCard.userCard).gradeVendor.name
                }
                grade={getGrade(userCollectionCard.userCard).grade}
                height={48}
                width={48}
              />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            // mx: -3,
            pt: 2,
          }}
        >
          <Typography variant="subtitle2">
            {userCollectionCard.userCard.card.cardSet.year}
          </Typography>
          <Typography variant="h4">
            {userCollectionCard.userCard.card.name}
          </Typography>
          <Typography variant="h5">
            {userCollectionCard.userCard.card.cardSet.name}
          </Typography>
          <Typography variant="subtitle2">
            #{userCollectionCard.userCard.card.cardNumber}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
            height: 72,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5">
              {userCollectionCard.userCard.user.username ?? "No Name"}
            </Typography>
            <Typography variant="subtitle2">
              Added{" "}
              {DateTime.fromISO(userCollectionCard.createdAt).toRelative()}
            </Typography>
          </Box>
          {!!userCollectionCard.userCard.cardGrade?.currentValue && (
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" align="right">
                ${userCollectionCard.userCard.cardGrade?.currentValue}
              </Typography>
              <Typography variant="h6" align="right">
                Comp Value
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default UserCollectionCardCardView;
