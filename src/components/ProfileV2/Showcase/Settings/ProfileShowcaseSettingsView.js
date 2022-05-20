import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
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
import style from "./ProfileShowcaseSettingsStyle";

const ProfileShowcaseSettingsView = ({
  isMedium,
  showcases,
  handleChange,
  handleAddClick,
  handleBulkChange,
  allHidden,
}) => (
  <Box sx={style.container}>
    <Box sx={style.innerContainer}>
      <Box sx={style.innerHeaderBox}>
        <Typography
          variant={isMedium ? "h6" : "h3"}
          sx={style.innerHeaderTitle}
        >
          Public Showcases
        </Typography>
        {allHidden ? (
          <IconButton sx={style.eyeButton} onClick={handleBulkChange}>
            <VisibilityOffIcon sx={style.avatarIconOff} />
          </IconButton>
        ) : (
          <IconButton sx={style.eyeButton} onClick={handleBulkChange}>
            <VisibilityIcon sx={style.avatarIconOn} />
          </IconButton>
        )}
        <Button
          onClick={handleAddClick}
          startIcon={<AddIcon />}
          sx={style.addButton}
        >
          New
        </Button>
      </Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left" sx={style.tableCellLabel}>
                Views
              </TableCell>
              <TableCell align="left" sx={style.tableCellLabel}>
                Cards
              </TableCell>
              <TableCell align="right" sx={style.tableCellLabel}>
                Include
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showcases.map(showcase => (
              <TableRow key={showcase.id} sx={style.tableRow}>
                <TableCell align="left" sx={style.tableCellBoxRoot}>
                  <Typography sx={style.showcaseTitle}>
                    {showcase.name}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={style.tableCellBoxValue}>
                  <Typography sx={style.showcaseValue}>
                    {showcase.views?.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={style.tableCellBoxValue}>
                  <Typography sx={style.showcaseValue}>
                    {showcase.cardCount?.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={style.tableCellSwitch}>
                  <Switch
                    checked={showcase.isVisible}
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

export default ProfileShowcaseSettingsView;
