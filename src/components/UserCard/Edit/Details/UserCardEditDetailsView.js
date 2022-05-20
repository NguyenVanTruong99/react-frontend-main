import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import UserCardDetailsForm from "components/UserCard/Details/Form";
import UserCardDetailsImageEditor from "components/UserCard/Details/ImageEditor";

const UserCardEditDetailsView = ({
  userCard,
  control,
  onSubmit,
  windowWidth,
  onCancel,
  editCancelOpen,
  handleEditCancelOpen,
  handleEditCancelClose,
  UserCardDetailsNav,
  GradeBadge,
  CardSearch,
  handleCardSelect,
  UserCardDetailsNextButton,
}) => (
  <Box pt={2}>
    <Grid
      container
      spacing={0}
      sx={{
        backgroundColor: theme => theme.palette.background.paper,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        xl={6}
        sx={{
          backgroundColor: theme => theme.palette.background.main,
        }}
      >
        <UserCardDetailsImageEditor userCard={userCard} type="add" />
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: 4,
            mb: 3,
            minHeight: {
              md: 400,
            },
          }}
        >
          {/* <Typography variant="addLg" sx={{ mb: 3 }}>Card information</Typography> */}
          {!!userCard.card && (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  pt: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        md: "flex",
                      },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ pt: { md: 0, xs: 12 } }}>
                      <Box sx={{ position: "relative" }}>
                        <Typography variant="cardDetailXmd">
                          {userCard.card.name}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="cardDetailXsBold">
                          {userCard.card.cardSet.year}{" "}
                          {userCard.card.cardSet.name}{" "}
                          {userCard.card.cardSet.variety === "Base"
                            ? ""
                            : userCard.card.cardSet.variety}
                        </Typography>
                        <Typography variant="cardDetailXsGrey">
                          #{userCard.card.cardNumber}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  {!!userCard.certNumber && (
                    <Box
                      sx={{
                        display: {
                          xs: "flex",
                          md: "flex",
                        },
                        mt: 2,
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      {!!userCard.cardGrade && (
                        <Box sx={{ mr: 2 }}>
                          <GradeBadge
                            grade={userCard.displayGrade?.grade}
                            gradeVendor={
                              userCard.displayGrade?.gradeVendor?.name
                            }
                            width="48px"
                            height="48px"
                          />
                        </Box>
                      )}
                      <Box>
                        <Typography variant="cardDetailXs">Cert #:</Typography>
                        <Typography variant="cardDetailXsBold">
                          {userCard.certNumber}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
              <UserCardDetailsForm
                userCard={userCard}
                editing
                onCancel={onCancel}
              />
            </>
          )}
          {!userCard.card && (
            <Box
              flex={1}
              display="flex"
              position="relative"
              flexDirection="column"
              justifyContent="space-between"
            >
              <CardSearch
                initialTerm={`${userCard.playerName ?? ""} ${
                  userCard.year ?? ""
                } ${userCard.cardSetName ?? ""} `}
                onSelectCard={handleCardSelect}
              />
              <Box display="flex" alignSelf="flex-end">
                <UserCardDetailsNextButton userCard={userCard} />
              </Box>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default UserCardEditDetailsView;
