import { createRef, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import AddCardByCertificationNumber from "pages/AddCardByCertificationNumber";
import AddCardBySearch from "pages/AddCardBySearch";
import AddToHomeScreenIcon from "assets/images/add-card-cert.svg";
import Backdrop from "@mui/material/Backdrop";
import BgPattern from "assets/images/Bg-med-pattern.png";
import BoltIcon from "@mui/icons-material/Bolt";
import Box from "@mui/material/Box";
import CardAddSplashView from "./CardAddSplashView";
import CreateIcon from "assets/images/icons/edit.svg";
import { ImageUploaderContext } from "contexts/ImageUploader";
import InstagramLogin from 'react-instagram-login';
import InstagramPhotoPicker from 'components/InstagramPhotoPicker';
import LoadingGif from "assets/images/loading3.gif";
import Modal from "@mui/material/Modal";
import Outline from "assets/images/notches/outline-only.png";
import ReactDOM from 'react-dom';
import SearchIcon from "@mui/icons-material/Search";
import { StagedUserCardsContext } from "contexts/StagedUserCards";
import { createUserCardByImageUpload } from "components/UserCard/mutations";
import { listMyStagedUserCards } from "components/UserCard/queries";
import { useNavigate } from "react-router";
import { useTheme } from "@mui/material";

const style = {
  position: "absolute",
  top: 70,
  left: "50%",
  transform: "translate(-50%,-50px)",
  borderRadius: "8px",
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

const CardAddSplashContainer = ({ handleOpen, handleSearchOpen }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const { addUserCard } = useContext(StagedUserCardsContext);
  const { files, setMultiple, requestUploadDialog, clearFiles } =
    useContext(ImageUploaderContext);
  const { data: { listMyStagedUserCards: userCards = [] } = {} } = useQuery(
    listMyStagedUserCards,
    {
      // pollInterval: 5000,
      variables: {
        offsetAttributes: {
          limit: 100,
        },
      },
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFinishButtonClick = useCallback(
    () => navigate("/add-cards"),
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

  const successInstagram = useCallback((e) => {
    // console.log(e)
  }, []);

  const failureInstagram = useCallback(() => {
    // console.log("fail")
  }, []);

  // onPhotosPicked function to print each photo
  const onPhotosPicked = useCallback((photos) => {
    setLoading(true);
    !!Array.from(photos).length &&
      Promise.all([
        setLoading(true),
        photos.map(photo =>
          fetch(photo)
          .then(console.log('getting blob...'))
            .then(function (response) {
              return response.blob()
            })
            .then(function (blob) {
              createByUpload({
                context: { hasUpload: true },
                variables: {
                  image: blob,
                },
              })
            })
        )
      ])
  }, [createByUpload]);

  return (
    <>
      <CardAddSplashView
        theme={theme}
        onCerticationButtonClick={handleOpen}
        onSearchButtonClick={handleSearchOpen}
        onFileClick={requestUploadDialog}
        onInstagramClick={onInstagramClick}
        onFinishButtonClick={handleFinishButtonClick}
        loading={loading}
        stagedCardCount={userCards.length}
      />
      <InstagramPhotoPicker
        onPhotosPicked={photos => onPhotosPicked(photos)}
        ref={ref => InstagramPhotoPicker.instaDialog = ref}
        clientId={"876140053069588"}
      />
      {/* <InstagramLogin
        clientId="876140053069588"
        buttonText="Login"
        scope={'user_profile,user_media'}
        implicitAuth={true}
        onSuccess={successInstagram}
        onFailure={failureInstagram}
      /> */}
      {/* <Modal
        open={!!open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Box sx={style.Top}>
            <Box sx={style.Mid}>
              <Box sx={style.Outline}>
                <img src={AddToHomeScreenIcon} alt="create" style={{ filter: 'brightness(0) invert(1)', width: 50 }} />
              </Box>
            </Box>
          </Box>
          <Box>
            <AddCardByCertificationNumber onCancel={handleClose} />
          </Box>
        </Box>
      </Modal>

      <Modal
        open={!!searchOpen}
        onClose={handleSearchClose}
      >
        <Box sx={style}>
          <Box sx={style.Top}>
            <Box sx={style.Mid}>
              <Box sx={style.Outline}>
                <SearchIcon style={{ color: 'white', fontSize: '72' }} />
              </Box>
            </Box>
          </Box>
          <Box>
            <AddCardBySearch onCancel={handleSearchClose} />
          </Box>
        </Box>
      </Modal> */}
    </>
  );
};

export default CardAddSplashContainer;
