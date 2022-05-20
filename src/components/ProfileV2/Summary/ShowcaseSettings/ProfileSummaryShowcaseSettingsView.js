import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Switch from "@mui/material/Switch";
import style from "./ProfileSummaryShowcaseSettingsStyle";

const ProfileSummaryShowcaseSettingsView = ({
  isMedium,
  showcases,
  handleChange,
  allUnfeatured,
  handleBulkChange,
}) => (
  <Box sx={style.container}>
    <Typography variant="body1" sx={style.sectionHeader}>
      Featured
    </Typography>
    <Box sx={style.innerContainer}>
      <Box sx={style.innerHeaderBox}>
        <Typography
          variant={isMedium ? "h6" : "h3"}
          sx={style.innerHeaderTitle}
        >
          Showcase
        </Typography>
        {allUnfeatured ? (
          <IconButton onClick={handleBulkChange} sx={style.eyeButton}>
            <VisibilityOffIcon sx={style.avatarIconOff} />
          </IconButton>
        ) : (
          <IconButton onClick={handleBulkChange} sx={style.eyeButton}>
            <VisibilityIcon sx={style.avatarIconOn} />
          </IconButton>
        )}
      </Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={style.tableCellLabel}>
                Showcase
              </TableCell>
              <TableCell align="right" sx={style.tableCellLabel}>
                Feature
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showcases.map(showcase => (
              <TableRow key={showcase.id} sx={style.tableRow}>
                <TableCell align="left" sx={style.tableCellBoxRoot}>
                  <Box sx={style.tableCellBox}>
                    <Box sx={style.tableCellImageBox}>
                      <img
                        src={showcase.coverImageUrl}
                        alt=""
                        style={style.tableCellImage}
                      />
                    </Box>
                    <Box sx={style.tableCellInfoBox}>
                      <Typography sx={style.showcaseTitle}>
                        {showcase.name}
                      </Typography>
                      <Typography sx={style.showcaseDetails}>
                        {showcase.cardCount.toLocaleString()} Cards {". "}
                        {showcase.views.toLocaleString()} Views
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center" sx={style.tableCellFeatured}>
                  <Switch
                    checked={showcase.isFeatured}
                    onChange={event => handleChange(event, showcase)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
);

export default ProfileSummaryShowcaseSettingsView;
