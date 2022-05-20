import { Box, TableRow, TableCell } from "@mui/material";
import OutlineNotch from "assets/images/notches/small.png";

const UserTableRowView = ({ handleRowClicked, item, RowActionComponent }) => (
  <TableRow>
    <TableCell
      sx={{ width: "50%", px: 0 }}
      align="left"
      onClick={e => {
        if (!!handleRowClicked) handleRowClicked(e, item.id);
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          component="span"
          sx={{
            overflow: "hidden",
            margin: "0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={OutlineNotch}
            style={{
              position: "absolute",
              width: "55px",
              height: "55px",
              zIndex: 2,
            }}
            alt="profile img"
          />
          {item?.approvedProfileImages.length > 0 ? (
            <img
              src={item?.approvedProfileImages[0]?.imageUrl}
              style={{
                position: "relative",
                height: "55px",
                width: "55px",
                objectFit: "cover",
                zIndex: 1,
                margin: "auto",
              }}
              alt="profile img"
            />
          ) : (
            <span style={{ height: "55px", width: "50%" }}></span>
          )}
        </Box>
        <Box
          onClick={e => {
            if (!!handleRowClicked) handleRowClicked(e, item.id);
          }}
        >
          {item.username ?? "No Username"}
        </Box>
      </Box>
    </TableCell>

    {RowActionComponent && (
      <TableCell align="center" sx={{ width: "50%", px: 0 }}>
        <RowActionComponent item={item} />
      </TableCell>
    )}
  </TableRow>
);

export default UserTableRowView;
