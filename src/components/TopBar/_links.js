import { Link } from "@mui/material";
import styles from "../IdentityBar/IdentityBarStyles";

const TopBarView = () => (
  <div>
    <div
      xs={styles.sublinks}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Link sx={styles.link} href="#">
        Link
      </Link>
      <Link sx={styles.link} href="#">
        Link
      </Link>
      <Link sx={styles.link} href="#">
        Link
      </Link>
      <Link sx={styles.link} href="#">
        Link
      </Link>
    </div>
  </div>
);
export default TopBarView;
