import {
  Button,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import { ReactComponent as AddCardIcon } from "assets/svg/icons/add-card.svg";
import { Box } from "@mui/system";
import CardBasicInfo from "components/Card/BasicInfo";
import EmptyCardImg from "assets/images/empty-card-image-white.png";
import GradeBadge from "components/Grade/Badge";
import IosShareIcon from "@mui/icons-material/IosShare";
import LoadingButton from "@mui/lab/LoadingButton";
import ModalPrompt from "components/ModalPrompt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NoxxBg from "assets/images/backgrounds/noxx-bg-sm.svg";
import OutlineNotch from "assets/images/notches/medium-transparent.png";
import ShowcaseModal from "components/Showcase/Modal";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Tooltip from "@mui/material/Tooltip";
import WantListAddRemoveIconButton from "components/WantList/AddRemoveIconButton";
import { deleteUserCard } from "components/UserCard/mutations";
import globalStyles from "components/Styles";
import styles from "./UserCardDetailsHeaderStyles";
import theme from "theme.js";
import { useMutation } from "@apollo/client";

const UserCardDetailsHeaderView = ({
  details,
  currentUser,
  cardId,
  userCardDetails,
  cardSetYear,
  playerFullName,
  cardSetName,
  cardNumber,
  grade,
  gradeVendor,
  gradePop,
  userCardCertNumber,
  ownerUserId,
  viewerUserId,
  imageSrcs,
  onPlayerLinkClick,
  displayPlayerPageLink,
  onEbayLinkClick,
  onEditLinkClick,
  onAddToCollectionClick,
  adding,
  userCardId,
  isMine,
  isMobile,
  editionNumber,
  profileUrl,
  user,
  profileImg,
  onShare,
  handleOpenLogin
  // onEditClick
}) => (
  <Grid container spacing={0} sx={styles.gridContainer}>
    <Box sx={styles.shareButton}>
      <IconButton
        onClick={onShare}
        sx={{ borderRadius: "100%", border: "1px solid #000000" }}
      >
        <IosShareIcon color="black" />
      </IconButton>
    </Box>
    <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
      <Box
        sx={{
          ml: { md: 12, xs: 4 },
          height: { md: isMine ? "520px" : "480px", xs: "100%" },
          mt: { xs: 58, md: 0 },
          pt: { xs: 0, md: 1 },
          display: { md: "block", xs: "flex" },
          flexDirection: "column",
          mb: { md: 0, xs: 3 },
          pb: { xs: 2, md: 0 },
          pl: { xs: 1, md: 0 },
        }}
      >
        <CardBasicInfo
          cardSetYear={cardSetYear}
          playerFullName={playerFullName}
          cardSetName={cardSetName}
          cardNumber={cardNumber}
          onPlayerLinkClick={onPlayerLinkClick}
          displayPlayerPageLink={displayPlayerPageLink}
          editionNumber={editionNumber}
          HOF={details.some(detail => detail.detailName === "Hall of Fame")}
        />
        <Box
          sx={{
            ...globalStyles.row,
            ...styles.row,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {!!grade && !!gradeVendor ? (
            <Box sx={{ ...styles.gradeBox, position: "relative", top: "10px" }}>
              <GradeBadge grade={grade} gradeVendor={gradeVendor} width={50} />
            </Box>
          ) : (
            <></>
          )}
          {!!grade && !!gradeVendor && !!gradePop && (
            <Box sx={styles.gradeBox}>
              <Typography sx={styles.gradeInfoTopText} variant="addSm">
                {!!gradePop ? `${gradeVendor} Pop.` : "\u00a0"}
              </Typography>
              <Typography sx={styles.gradeInfoBottomText} variant="addSmMd">
                {gradePop ?? "\u00a0"}
              </Typography>
            </Box>
          )}
          {!!userCardCertNumber && (
            <>
              <Box sx={styles.gradeBox}>
                <Typography sx={styles.gradeInfoTopText} variant="addSm">
                  Cert. #
                </Typography>
                <Typography sx={styles.gradeInfoBottomText} variant="addSmMd">
                  {userCardCertNumber}
                </Typography>
              </Box>
            </>
          )}
          {!!ownerUserId && (
            <>
              <Link to={profileUrl} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "relative",
                    right: 8,
                  }}
                >
                  <img
                    src={OutlineNotch}
                    style={{
                      position: "relative",
                      left: -2,
                      top: 0,
                      width: "55px",
                      height: "55px",
                      zIndex: 2,
                      borderBottomLeftRadius: "4px",
                    }}
                    alt="profile img"
                  />
                  <img
                    src={profileImg}
                    style={{
                      position: "absolute",
                      overflow: "hidden",
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                      zIndex: 1,
                      margin: "auto",
                      clipPath:
                        "polygon(3% 3%, 80% 5%, 100% 25%, 99% 99%, 22% 100%, 2% 80%)",
                    }}
                    alt="profile img"
                  />
                </Box>
              </Link>
              <Divider
                sx={{
                  display: {
                    xs: "none",
                    md: "initial",
                  },
                  ml: 1,
                  mr: 2,
                  my: 2,
                }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
            </>
          )}
          {details
            .filter(detail => detail.detailName !== "Hall of Fame")
            .map((detail, i) => (
              <Box key={i} sx={styles.gradeBox}>
                <Tooltip
                  disableFocusListener
                  enterTouchDelay={0}
                  placement="top-end"
                  title={detail.detailName}
                >
                  <img
                    style={{ height: "45px" }}
                    src={require(`assets/images/attributes/${detail.detailName
                      .toLowerCase()
                      .replace(/ /g, "-")}.png`)}
                    alt={detail.detail_name}
                  />
                </Tooltip>
              </Box>
            ))}
          {(userCardDetails ?? []).map((detail, i) => (
            <Box key={i} sx={styles.gradeBox}>
              <Tooltip
                disableFocusListener
                enterTouchDelay={0}
                placement="top-end"
                title={detail.detailName}
              >
                <img
                  src={require(`assets/images/attributes/${detail.detailName
                    .toLowerCase()
                    .replace(/ /g, "-")}.png`)}
                  alt={detail.detail_name}
                />
              </Tooltip>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            ...globalStyles.row,
            ...styles.row,
            gap: 2,
            marginTop: { md: "32px", xs: "12px" },
          }}
        >
          {isMine ? (
            <Button
              onClick={onEditLinkClick}
              variant="contained"
              sx={{
                background: "#258aff",
                borderColor: "#258aff",
                width: {
                  xs:
                    viewerUserId !== ownerUserId &&
                      !(viewerUserId && profileUrl) &&
                      isMobile
                      ? "60%"
                      : "70%",
                  md: "auto",
                },
              }}
            >
              Edit Card Details
            </Button>
          ) : (
            <Button
              onClick={onEbayLinkClick}
              variant="contained"
              sx={{
                background: "#258aff",
                borderColor: "#258aff",
                width: {
                  xs:
                    viewerUserId !== ownerUserId &&
                      !(viewerUserId && profileUrl) &&
                      isMobile
                      ? "60%"
                      : "70%",
                  md: "auto",
                },
              }}
            >
              {viewerUserId !== ownerUserId &&
                !(viewerUserId && profileUrl) &&
                isMobile
                ? "Buy"
                : "Buy This Card"}
            </Button>
          )}
          {((viewerUserId !== ownerUserId) || !user) &&
            (viewerUserId && profileUrl ? (
              <></>
            ) : (
              <LoadingButton
                sx={{
                  width: { xs: "40%", md: "auto" },
                  height: { xs: 38, md: "auto" },
                }}
                loading={!!adding}
                disabled={!!adding}
                variant="outlined"
                onClick={onAddToCollectionClick}
              >
                {!isMobile ? (
                  <span>Add To My Collection</span>
                ) : (
                  <AddCardIcon />
                )}
              </LoadingButton>
            ))}
          {viewerUserId !== ownerUserId && currentUser && (
            <>
              <WantListAddRemoveIconButton cardId={cardId} />
              <Box pr={1} />
            </>
          )}
          {!currentUser && (
            <>
              <StarOutlineIcon sx={{
                cursor: "pointer",
              }}
                fontSize={"large"}
                color="primary" 
                onClick={handleOpenLogin}/>
              <Box pr={1} />
            </>
          )}
          {!!viewerUserId && viewerUserId === ownerUserId && (
            <ActionsButtonContainer userCardId={userCardId} isMine={isMine} />
          )}
        </Box>
      </Box>
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      order={{ xs: 1, md: 2 }}
      sx={isMine ? styles.imageViewerWrapper.mine : styles.imageViewerWrapper}
    >
      <Box>
        <img
          src={NoxxBg}
          alt="Noxx"
          style={{
            width: "200%",
            position: "absolute",
            overflow: "hidden",
            right: 0,
            bottom: 0,
            clipPath: "polygon(50% 0, 100% 0%, 100% 100%, 50% 100%)",
            paddingBottom: "2px",
            borderBottom: "2px solid black",
          }}
        />
      </Box>
      {!!imageSrcs[0] ? (
        !isMobile ? (
          <img
            src={imageSrcs[0]}
            alt="Card"
            style={{
              position: "relative",
              height: "450px",
              padding: theme.spacing(4),
              zindex: 2,
            }}
          />
        ) : (
          <img
            src={imageSrcs[0]}
            alt="Card"
            style={{
              position: "relative",
              height: "auto",
              maxHeight: "500px",
              maxWidth: "95vw",
              padding: theme.spacing(4),
              zindex: 2,
            }}
          />
        )
      ) : (
        <img
          src={EmptyCardImg}
          alt="DummyCard"
          style={{
            position: "relative",
            height: "auto",
            maxWidth: "95vw",
            padding: theme.spacing(4),
            zindex: 2,
          }}
        />
      )}
    </Grid>
  </Grid>
);

export default UserCardDetailsHeaderView;

const ActionsButtonContainer = ({ userCardId, isMine }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [deleteCardOpen, setDeleteCardOpen] = useState(false);
  const handleDeleteCardOpen = useCallback(() => setDeleteCardOpen(true), []);
  const handleDeleteCardClose = useCallback(() => setDeleteCardOpen(false), []);

  const [destroy] = useMutation(deleteUserCard, {
    variables: {
      input: {
        id: userCardId ?? "",
      },
    },
  });

  const handleOpen = useCallback(event => setAnchorEl(event.currentTarget), []);

  const handleClose = useCallback(event => setAnchorEl(null), []);

  const handleRemove = useCallback(
    () => [
      handleDeleteCardClose(),
      destroy()
        .then(() => navigate("/my-collection"))
        .catch(console.error),
    ],
    [destroy, navigate, handleDeleteCardClose]
  );

  const handleToggleModal = useCallback(
    () => setIsModelOpen(prev => !prev),
    [setIsModelOpen]
  );

  const handleRemoveFromCollectionModal = useCallback(
    () => setIsModelOpen(prev => !prev),
    [setIsModelOpen]
  );

  return (
    <ActionsButtonView
      isModalOpen={isModalOpen}
      open={open}
      isMine={isMine}
      onOpen={handleOpen}
      onClose={handleClose}
      onToggleModal={handleToggleModal}
      onRemove={handleRemove}
      userCardId={userCardId}
      anchorEl={anchorEl}
      deleteCardOpen={deleteCardOpen}
      handleDeleteCardOpen={handleDeleteCardOpen}
      handleDeleteCardClose={handleDeleteCardClose}
      handleDeleteCardAction={handleRemove}
    />
  );
};

const ActionsButtonView = ({
  isModalOpen,
  onToggleModal,
  onOpen,
  onClose,
  open,
  isMine,
  onRemove,
  userCardId,
  anchorEl,
  deleteCardOpen,
  handleDeleteCardOpen,
  handleDeleteCardClose,
  handleDeleteCardAction,
}) => (
  <>
    <IconButton
      onClick={onOpen}
      color="primary"
      sx={{ border: theme => `1px solid ${theme.palette.background.blue}` }}
    >
      <MoreHorizIcon />
    </IconButton>
    {!!open && (
      <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
        <MenuItem>Actions</MenuItem>
        <Divider />
        <MenuItem onClick={handleDeleteCardOpen}>
          Remove from my Collection...
        </MenuItem>
        {!isMine && (
          <MenuItem component={Link} to="edit">
            Edit card details...
          </MenuItem>
        )}
        <MenuItem onClick={onToggleModal}>Add to a Showcase...</MenuItem>
      </Menu>
    )}
    <ShowcaseModal
      isOpen={isModalOpen}
      onClose={onToggleModal}
      userCardId={userCardId}
    />
    <ModalPrompt
      open={!!deleteCardOpen}
      promptMessage="Are you sure you want to remove this card?"
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleDeleteCardClose}
      handleAction={handleDeleteCardAction}
    />
  </>
);
