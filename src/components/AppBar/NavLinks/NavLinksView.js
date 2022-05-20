import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import styles from "./NavLinksStyles";

const NavLinksView = ({ handleClose }) => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "My Collection", path: "/my-collection" },
    { name: "Showcases", path: "/my-showcases" },
    { name: "Want List", path: "/my-want-list" },
    { name: "Add Cards", path: "/add-cards" },
  ];

  return (
    <List>
      {links.map((link, i) => (
        <Link
          to={link.path}
          style={styles.link}
          key={i.toString()}
          onClick={() => handleClose()}
        >
          <ListItem>
            <ListItemButton selected={location.pathname === link.path}>
              <ListItemText
                primary={
                  <Typography sx={styles.listItem} variant="h4">
                    {link.name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default NavLinksView;
