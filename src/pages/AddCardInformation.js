import {
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  createUserCardByImageUpload,
  deleteUserCard,
} from "components/UserCard/mutations";
import { useCallback, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import AddCardByCertificationNumber from "./AddCardByCertificationNumber";
import AddCardBySearch from "./AddCardBySearch";
import AddCardGcr from "assets/images/add-card-gcr.svg";
import AddCardSearchImg from "assets/images/add-card-search.svg";
import AddToHomeScreenIcon from "assets/images/add-card-cert.svg";
import Backdrop from "@mui/material/Backdrop";
import BgPattern from "assets/images/Bg-med-pattern.png";
import { Box } from "@mui/system";
import CardAddSplash from "components/Card/Add/Splash";
import { DateTime } from "luxon";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ImageUploaderContext } from "contexts/ImageUploader";
import InstagramIcon from "@mui/icons-material/Instagram";
import InstagramPhotoPicker from "components/InstagramPhotoPicker";
import LoadingGif from "assets/images/loading3.gif";
import Modal from "@mui/material/Modal";
import ModalPrompt from "components/ModalPrompt";
import Outline from "assets/images/notches/outline-only.png";
import SearchIcon from "@mui/icons-material/Search";
import { USER_CARD_TABLE_COLS } from "constants/cards";
// import CardListItem from 'components/Card/List/Item';
import UserCardBulkAddButton from "components/UserCard/BulkAddButton";
import UserCardTable from "components/UserCard/Table";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: 70,
  left: "50%",
  transform: "translate(-50%,-50px)",
  width: {
    xs: "100%",
    md: 700,
  },
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
  maxHeight: "calc(100% - 35px)",
  overflowY: "auto",
  modal: {
    position: "absolute",
    top: 70,
    left: "50%",
    transform: "translate(-50%,-50px)",
    borderRadius: "8px",
    border: "1px solid #9e9e9e",
    width: {
      xs: "100%",
      md: 700,
    },
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    maxHeight: "calc(100% - 35px)",
    overflowY: "hidden",
  },
  Top: {
    background: `url(${BgPattern})`,
    backgroundSize: "100% 100%",
    height: "150px",
    backgroundRepeat: "no-repeat",
  },
  Mid: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "40%",
    height: "100%",
  },
  Outline: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "95px",
    width: "95px",
    background: `url(${Outline})`,
    backgroundSize: "100% 100%",
  },
};

const AddCardInformation = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleSearchOpen = useCallback(() => setSearchOpen(true), []);
  const [loading, setLoading] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleSearchClose = useCallback(() => setSearchOpen(false), []);
  const { files, setMultiple, requestUploadDialog, clearFiles } =
    useContext(ImageUploaderContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [addBulkOpen, setAddBulkOpen] = useState(false);
  const handleAddBulkOpen = useCallback(() => setAddBulkOpen(true), []);
  const handleAddBulkClose = useCallback(() => setAddBulkOpen(false), []);

  const navigate = useNavigate();
  const { error, data: { listMyStagedUserCards: userCards = [] } = {} } =
    useQuery(listMyStagedUserCards, {
      // pollInterval: 5000,
      variables: {
        offsetAttributes: {
          limit: 100,
        },
      },
    });
  const handleAddBulkAction = useCallback(
    () => navigate(`/my-collection`),
    [navigate]
  );

  const handleCardClick = useCallback(
    ({ userCard }) => navigate(`/add-cards/${userCard?.id}/details`),
    [navigate]
  );

  const [createByUpload] = useMutation(createUserCardByImageUpload, {
    refetchQueries: [
      {
        query: listMyStagedUserCards,
        variables: {
          offsetAttributes: {
            limit: 100,
          },
        },
      },
    ],
  });

  const onInstagramClick = useCallback(() => {
    InstagramPhotoPicker.instaDialog.showDialog();
  }, []);

  const onPhotosPicked = useCallback(photos => {
    // console.log(photos);
    //loop through each value in photos and print it
    photos.map(photo =>
      (async () => {
        const response = await fetch(photo);
        const imageBlob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
        reader.onloadend = () => {
          // console.log(base64data);
          createByUpload({
            context: { hasUpload: true },
            variables: {
              image: imageBlob,
            },
          });
        };
      })()
    );
  }, []);

  const [remove] = useMutation(deleteUserCard, {
    refetchQueries: [
      {
        query: listMyStagedUserCards,
        variables: {
          offsetAttributes: {
            limit: 100,
          },
        },
      },
    ],
  });

  !!error && console.error(error);

  useEffect(() => {
    setMultiple(true);
  }, [setMultiple]);

  useEffect(() => {
    !!Array.from(files).length &&
      Promise.all([
        setLoading(true),
        ...Array.from(files).map(file =>
          createByUpload({
            context: { hasUpload: true },
            variables: {
              image: file,
            },
          })
            .then(clearFiles)
            .catch(console.error)
            .finally(() => setLoading(false))
        ),
      ]);
  }, [files, createByUpload, clearFiles]);

  const cardTableColumns = isMobile
    ? [USER_CARD_TABLE_COLS.DETAILS, USER_CARD_TABLE_COLS.GRADE]
    : [
        USER_CARD_TABLE_COLS.DETAILS,
        USER_CARD_TABLE_COLS.GRADE,
        USER_CARD_TABLE_COLS.PLAYER,
        USER_CARD_TABLE_COLS.SPORT,
        USER_CARD_TABLE_COLS.YEAR,
        USER_CARD_TABLE_COLS.SET,
        USER_CARD_TABLE_COLS.VARIETY,
        USER_CARD_TABLE_COLS.NUMBER,
        USER_CARD_TABLE_COLS.CREATED_AT,
      ];

  return (
    <>
      <Backdrop
        sx={{
          color: "#fffff",
          background: "rgba(0,0,0,0.2)",
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        <img src={LoadingGif} style={{ height: 100 }} alt="loading" />
      </Backdrop>
      <Box
        sx={{
          pt: 4,
          mx: {
            xs: 2,
            md: 4,
          },
          minHeight: "80vh",
        }}
      >
        {!!userCards.length ? (
          <>
            <Typography variant="mdLg">Add Cards</Typography>
            <Box
              sx={{
                p: 1,
                borderRadius: theme => theme.shape.borderRadius,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                my: 2,
                mb: 4,
              }}
            >
              {
                !isMobile && (
                  <Button
                    loading={!!loading}
                    variant="outlined"
                    sx={{ width: "300px", fontWeight: 500 }}
                    onClick={requestUploadDialog}
                    startIcon={
                      <img
                        src={AddCardGcr}
                        alt=""
                        style={{ marginRight: "8px", width: 24 }}
                      ></img>
                    }
                  >
                    {<span>Graded Card Recognition</span>}
                  </Button>
                )

                // <Button onClick={requestUploadDialog} variant="text"><img src={AddToHomeScreenIcon} alt="add" style={{ marginRight: '8px', width: 24 }} />{!isMobile ? <span>Browse Files</span> : <span></span>}</Button>
              }
              {
                isMobile && (
                  <Button
                    loading={!!loading}
                    variant="outlined"
                    sx={{ width: "300px", fontWeight: 500 }}
                    onClick={requestUploadDialog}
                  >
                    {!loading ? (
                      <img src={AddCardGcr} alt="" style={{ width: 24 }}></img>
                    ) : (
                      <></>
                    )}
                  </Button>
                )
                //   <LoadingButton
                //   loading={!!loading}
                //   variant="outlined"
                //   sx={{width: '300px', height: '4px'}}
                //   loadingIndicator={<img src={LoadingGif} style={{height: '25px'}} alt="loading" />}
                //   onClick={requestUploadDialog}
                //   startIcon={<img src={AddToHomeScreenIcon} alt="add" />}
                // >{!isMobile ? <span>Browse Files</span> : <span></span>}</LoadingButton>
                // <Button onClick={requestUploadDialog} variant="text">
                //   <img src={AddToHomeScreenIcon} alt="add" style={{ marginRight: '8px', width: 24 }} />{!isMobile ? <span>Browse Files</span> : <span></span>}
                // </Button>
              }
              <Box sx={{ width: 40 }} />
              <Button
                onClick={handleOpen}
                variant="outlined"
                sx={{ width: "300px", fontWeight: 500 }}
              >
                <img
                  src={AddToHomeScreenIcon}
                  alt="add"
                  style={{ width: 24 }}
                />
                {!isMobile ? <span>Add By Cert #'s</span> : <span></span>}
              </Button>
              <Box sx={{ width: 40 }} />
              <Button
                onClick={onInstagramClick}
                variant="outlined"
                sx={{ width: "300px", fontWeight: 500 }}
              >
                <InstagramIcon />
                {!isMobile ? <span>&nbsp;Import</span> : <span></span>}
              </Button>
              <Box sx={{ width: 40 }} />
              <Button
                onClick={handleSearchOpen}
                variant="outlined"
                sx={{ width: "300px", fontWeight: 400 }}
              >
                <img src={AddCardSearchImg} alt="add" style={{ width: 24 }} />
                {!isMobile ? <span>Search</span> : <span></span>}
              </Button>
            </Box>
            <Paper sx={{ maxHeight: "30vh" }}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        md: "flex",
                      },
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      mx: 2,
                      my: 2,
                      height: "55%",
                    }}
                  >
                    <Typography variant="addMd" mr={2}>
                      {DateTime.now().toLocaleString(DateTime.DATE_FULL)}
                    </Typography>
                    {!!userCards.length && (
                      <Typography variant="subtitle1">
                        {userCards.length} Card(s) Successfully uploaded
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: {
                        xs: "center",
                        md: "flex-end",
                      },
                      mx: 4,
                      my: 2,
                    }}
                  >
                    {!!userCards.length && (
                      <UserCardBulkAddButton
                        userCards={userCards}
                        handleAddBulkOpen={handleAddBulkOpen}
                      />
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Box>
                <UserCardTable
                  columns={cardTableColumns}
                  onRowClicked={handleCardClick}
                  RowActionComponent={({ item }) => (
                    <Button
                      onClick={e => {
                        e.stopPropagation();

                        remove({
                          variables: {
                            input: {
                              id: item?.userCard?.id,
                            },
                          },
                        });
                      }}
                      sx={{ zIndex: 10, color: "red" }}
                      variant="text"
                    >
                      <HighlightOffIcon />
                    </Button>
                  )}
                  showCount={false}
                  showPagination={false}
                  showRowActions={false}
                  showTitle={false}
                  showToolbar={false}
                  sortable={true}
                  TableProps={{ size: "small" }}
                  title={null}
                  userCards={userCards}
                />
              </Box>
            </Paper>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  md: "flex-end",
                },
                backgroundColor: theme => theme.palette.background.paper,
                px: { xs: 2, md: "64px" },
                py: 2,
                mt: 2,
                position: {
                  xs: "fixed",
                  md: "fixed",
                },
                bottom: { md: 0, xs: 0 },
                width: "100vw",
                left: 0,
                border: theme => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Button
                onClick={() => navigate("/my-collection")}
                variant="outlined"
                sx={{ mr: 2 }}
              >
                Save & Come Back
              </Button>
              {!!userCards.length && (
                <Button
                  onClick={() => handleCardClick({ userCard: userCards[0] })}
                  variant="contained"
                >
                  Add Card Details
                </Button>
              )}
            </Box>
          </>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardAddSplash
              handleOpen={handleOpen}
              handleSearchOpen={handleSearchOpen}
            />
          </Box>
        )}
      </Box>

      <Modal open={!!open} onClose={handleClose}>
        <Box sx={style.modal}>
          <Box sx={style.Top}>
            <Box sx={style.Mid}>
              <Box sx={style.Outline}>
                <img
                  src={AddToHomeScreenIcon}
                  alt="create"
                  style={{ filter: "brightness(0) invert(1)", width: 50 }}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <AddCardByCertificationNumber onCancel={handleClose} />
          </Box>
        </Box>
      </Modal>

      <Modal open={!!searchOpen} onClose={handleSearchClose}>
        <Box sx={style.modal}>
          <Box sx={style.Top}>
            <Box sx={style.Mid}>
              <Box sx={style.Outline}>
                <SearchIcon style={{ color: "white", fontSize: "72" }} />
              </Box>
            </Box>
          </Box>
          <Box>
            <AddCardBySearch onCancel={handleSearchClose} />
          </Box>
        </Box>
      </Modal>
      <ModalPrompt
        open={!!addBulkOpen}
        promptMessage="Cards added to My Collection!"
        closeMessage="OK"
        actionMessage="Yes"
        handleClose={handleAddBulkClose}
      />
      {/* <InstagramPhotoPicker
        onPhotosPicked={photos => onPhotosPicked(photos)}
        ref={ref => InstagramPhotoPicker.instaDialog = ref}
        clientId={"876140053069588"}
      /> */}
    </>
  );
};

export default AddCardInformation;
