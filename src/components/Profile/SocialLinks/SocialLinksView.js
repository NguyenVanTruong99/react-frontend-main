import { Box, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkIcon from "@mui/icons-material/Link";
import TiktokIcon from "assets/images/icons/tiktok.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatnotIcon from "assets/images/icons/whatnot.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { getSocialUrl } from "utils/getSocialUrl";
import styles from "./SocialLinkStyles";

const SocialLinksView = ({ userProfile }) => (
  <>
    {userProfile?.instagramUser && (
      <Box
        sx={styles.linkBox}
        onClick={() =>
          window.open(
            getSocialUrl("instagram", userProfile.instagramUser),
            "_blank"
          )
        }
      >
        <Box sx={styles.icon}>
          <InstagramIcon />
        </Box>
        <Typography variant="smMd" align="center" sx={{ paddingLeft: "8px" }}>
          {userProfile?.instagramUser}
        </Typography>
      </Box>
    )}
    {userProfile?.twitterUser && (
      <Box
        sx={styles.linkBox}
        onClick={() =>
          window.open(
            getSocialUrl("twitter", userProfile.twitterUser),
            "_blank"
          )
        }
      >
        <Box sx={styles.icon}>
          <TwitterIcon />
        </Box>
        <Typography variant="smMd" align="center" sx={{ paddingLeft: "8px" }}>
          {userProfile?.twitterUser}
        </Typography>
      </Box>
    )}
    {userProfile?.facebookName && (
      <Box
        sx={styles.linkBox}
        onClick={() =>
          window.open(
            getSocialUrl("facebook", userProfile.facebookName),
            "_blank"
          )
        }
      >
        <Box sx={styles.icon}>
          <FacebookIcon />
        </Box>
        <Typography variant="smMd" align="center" sx={{ paddingLeft: "8px" }}>
          {userProfile?.facebookName}
        </Typography>
      </Box>
    )}
    {userProfile?.tiktokUser && (
      <Box
        sx={styles.linkBox}
        onClick={() =>
          window.open(getSocialUrl("tiktok", userProfile.tiktokUser), "_blank")
        }
      >
        <Box sx={styles.icon}>
          <img src={TiktokIcon} style={{ height: "20px" }} alt="tiktok" />
        </Box>
        <Typography variant="smMd" align="center" sx={{ paddingLeft: "8px" }}>
          {userProfile?.tiktokUser}
        </Typography>
      </Box>
    )}
    {userProfile?.whatnotUser && (
      <Box
        sx={styles.linkBox}
        onClick={() =>
          window.open(
            getSocialUrl("whatnot", userProfile.whatnotUser),
            "_blank"
          )
        }
      >
        <Box sx={styles.icon}>
          <img src={WhatnotIcon} style={{ height: "15px" }} alt="whatnot" />
        </Box>
        <Typography variant="smMd" align="center" sx={{ paddingLeft: "8px" }}>
          {userProfile?.whatnotUser}
        </Typography>
      </Box>
    )}
    {userProfile?.youtubeUser && (
      <Box
        sx={styles.linkBox}
        onClick={() =>
          window.open(
            getSocialUrl("youtube", userProfile.youtubeUser),
            "_blank"
          )
        }
      >
        <Box sx={styles.icon}>
          <YouTubeIcon />
        </Box>
        <Typography variant="smMd" align="center" sx={{ paddingLeft: "8px" }}>
          {userProfile?.youtubeUser}
        </Typography>
      </Box>
    )}
    {userProfile?.websiteUrl && (
      <Box
        sx={styles.linkBox}
        onClick={() => window.open(userProfile.websiteUrl, "_blank")}
      >
        <Box sx={styles.icon}>
          <LinkIcon />
        </Box>
        <Typography variant="smMd" align="center" sx={{ paddingLeft: "8px" }}>
          website
        </Typography>
      </Box>
    )}
  </>
);

// websiteUrl, instagramUser, myslabsUser, starstockUser, twitterUser, facebookName, youtubeUser, ebayName, tiktokUser, snapchatUser, whatnotUser

export default SocialLinksView;
