import { Box, Typography } from "@mui/material";

import NoxxBg from "assets/images/Bg-md-nopattern.png";
import NoxxPattern from "assets/images/backgrounds/noxx-bg-md.png";
import ShowcaseCard from "../Card";
import ShowcaseImg from "assets/images/icons/showcase.png";
import ShowcaseListNav from "components/Showcase/List/Nav";
import ShowcaseAddImage from "assets/images/showcase-add.png";
import theme from "theme";

const ShowcaseListView = ({
  showcases,
  onNavClick,
  view,
  skipHeader,
  numberToShow,
  showcaseLabel,
  addShowcaseLabel,
  addShowcaseDesc,
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Box sx={{ maxWidth: "1200px", margin: "0 0", width: "100%" }}>
      {/* <Banner sx={{ pb: 0 }}>
        <Typography color="text.white" variant="h2" sx={{ fontWeight: 'bold' }}>{user.username ?? "No username"}'s Collection</Typography>
        <MyCollectionNav initialTab='/my-showcases' />
      </Banner> */}

      {!skipHeader && (
        <Box
          m={0}
          sx={{
            height: "150px",
            width: "100vw",
            position: "absolute",
            left: 0,
            top: { md: 80, xs: 60 },
            background: `url(${NoxxBg})`,
            backgroundSize: { md: "100% 100%", xs: "cover" },
            backgroundRepeat: "repeat",
          }}
        >
          <img
            src={NoxxPattern}
            alt="Noxx"
            style={{
              width: "70%",
              position: "absolute",
              overflow: "hidden",
              right: 0,
              bottom: 0,
              paddingBottom: "2px",
              zIndex: 2,
            }}
          />

          {/* <img src={NoxxPattern} alt="Noxx" style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 2 }} /> */}
          <Box
            sx={{
              position: "absolute",
              zIndex: 3,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography color="text.white" variant="h2" sx={{ fontWeight: 'bold' }}>{user?.username}'s Showcases</Typography> */}
            <img
              src={ShowcaseImg}
              alt="Showcase"
              style={{ height: "40%", position: "relative", bottom: 8 }}
            />
            {/* <MyCollectionNav initialTab="/my-want-list" /> */}
          </Box>
        </Box>
      )}
      {!skipHeader && (
        <ShowcaseListNav
          showcasesCount={showcases.length}
          view={view}
          onNavClick={onNavClick}
          theme={theme}
          showcaseLabel={showcaseLabel}
        />
      )}

      {showcases.length < 1 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ height: 296 }}>
            <img
              src={ShowcaseAddImage}
              style={{ height: 228 }}
              alt="Add a Showcase"
            />
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: 50,
              fontWeight: 600,
              mt: "-45px",
              textAlign: "center",
              letterSpacing: "-0.5px",
            }}
          >
            {addShowcaseLabel}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mt: "23.76px", color: "#757575" }}
          >
            {addShowcaseDesc}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          mt: 4,
          px: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {showcases.map((showcase, i) =>
          !!numberToShow && i >= numberToShow ? null : (
            <Box
              sx={{
                mr: { md: 2, xs: 0 },
                mb: { md: 2, xs: "12px" },
                width: { xs: "100%", md: "auto" },
              }}
              key={showcase.id}
            >
              <ShowcaseCard showcase={showcase} />
            </Box>
          )
        )}
      </Box>
    </Box>
  </Box>
);

export default ShowcaseListView;
