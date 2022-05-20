import { Box, CardActionArea, CardActions, IconButton } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import { DateTime } from "luxon";
import ShowcaseCardActionsButton from "./ActionsButton";
import ModalPrompt from "components/ModalPrompt";
import OutlineNotch from "assets/images/notches/small.png";
import ShowcaseImg from "assets/images/icons/showcase.png";
import style from "./ShowcaseCardStyle";

const ShowcaseCardView = ({
  showcase,
  coverImage,
  onNavigate,
  onShare,
  currentUser,
  showcaseUserImage,
  addClipOpen,
  handleAddClipClose,
  profileView,
  featured,
}) => (
  <Card
    variant="outlined"
    sx={{
      ...style.card,
      ...{
        width: { md: profileView ? "100%" : "282px", xs: "100%" },
        borderRadius: profileView ? "8px" : "4px",
      },
    }}
  >
    <CardActionArea
      component={"div"}
      onClick={onNavigate}
      sx={style.cardActionArea}
    >
      {featured && (
        <Box sx={style.featuredBox}>
          <Box sx={style.featuredImageBox}>
            <img src={ShowcaseImg} style={style.featuredImage} alt="" />
          </Box>
        </Box>
      )}
      <CardContent sx={style.cardContentContainer}>
        <Box sx={style.cardContentBox}>
          {!!coverImage && (
            <Box sx={{ ...style.coverImageBox, ...{ top: featured ? 40 : 0 } }}>
              <img src={coverImage} style={style.coverImage1} alt="cover" />
              <img src={coverImage} style={style.coverImage2} alt="cover" />
              <img src={coverImage} style={style.coverImage3} alt="cover" />
            </Box>
          )}
          {!profileView && (
            <>
              <Box sx={style.showcaseActionsBox} />
              <ShowcaseCardActionsButton showcase={showcase} color="primary" />
            </>
          )}
        </Box>
      </CardContent>

      <CardActions sx={style.cardActionsMiddle}>
        <Box sx={style.cardActionsMiddleBox}>
          {(showcase.userId === currentUser?.authenticatable?.id ||
            profileView) && (
            <>
              <Typography variant="showcaseMd" sx={style.showcaseName}>
                {showcase.name}
              </Typography>
              <Typography variant="cardGreySm" sx={style.showcaseNumCards}>
                {showcase.cardCount} cards
              </Typography>
              <Box sx={style.linkIconBox}>
                <IconButton onClick={onShare}>
                  <LinkIcon
                    color="primary"
                    fontSize="small"
                    sx={style.linkIcon}
                  />
                </IconButton>
                <Typography variant="h4">{showcase.views} Views</Typography>
              </Box>
            </>
          )}
          {showcase.userId !== currentUser?.authenticatable?.id &&
            !profileView && (
              <>
                <Typography variant="showcaseMd" sx={style.showcaseName}>
                  {showcase.name}
                </Typography>
                <Typography variant="cardGreySm" sx={style.showcaseStats}>
                  {showcase?.userCards?.length} cards &#183;&nbsp;
                  {showcase?.views} Views
                </Typography>
                <Box sx={style.bottomBox}>
                  <Box>
                    <Box sx={style.avatarBox}>
                      <img
                        src={OutlineNotch}
                        style={style.avatarNotch}
                        alt="profile img"
                      />
                      <img
                        src={showcaseUserImage}
                        style={style.avatarImg}
                        alt="profile img"
                      />
                    </Box>
                  </Box>
                  <Box sx={style.userInfoBox}>
                    <Typography variant="cardMd">
                      {showcase.user.username ?? "No Name"}
                    </Typography>
                    <Typography variant="cardSm" sx={style.addedDateText}>
                      Added {DateTime.fromISO(showcase.createdAt).toRelative()}
                    </Typography>
                  </Box>
                  <Box sx={style.linkIconBox2}>
                    <IconButton onClick={onShare}>
                      <LinkIcon color="primary" sx={style.linkIcon} />
                    </IconButton>
                  </Box>
                </Box>
              </>
            )}
        </Box>
      </CardActions>
    </CardActionArea>
    <ModalPrompt
      open={!!addClipOpen}
      promptMessage="URL copied to your clipboard!"
      closeMessage="OK"
      actionMessage="Yes"
      handleClose={handleAddClipClose}
      handleAction={null}
    />
  </Card>
);

export default ShowcaseCardView;
