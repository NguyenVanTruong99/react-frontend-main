import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./BreadCrumbsStyles";

const BreadCrumbsView = ({
  anchorEl,
  currentPage,
  handleClick,
  handleClose,
  history,
  isOpen,
}) => (
  <Box>
    <Typography variant="body1" sx={styles.textContainer}>
      <IconButton sx={styles.iconButton} onClick={handleClick}>
        <MoreHorizIcon sx={styles.icon} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
        {history.map((page, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <Link to={page.path}>{page.label}</Link>
          </MenuItem>
        ))}
        <MenuItem sx={styles.mutedItem}>{currentPage}</MenuItem>
      </Menu>
      <Box component="span" sx={styles.separator}>
        &rsaquo;
      </Box>
      {currentPage}
    </Typography>
  </Box>
);

export default BreadCrumbsView;
