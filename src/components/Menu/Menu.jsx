import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { IconSVG } from "..";

// eslint-disable-next-line react/prop-types
const UniMenu = ({ value = "All" }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(value);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="platform-button"
        aria-controls={open && "attendance-building-menu"}
        aria-haspopup="true"
        aria-expanded={open && "true"}
        onClick={handleClick}
        endIcon={<IconSVG name="down-arrow" />}
        sx={{
          px: 2,
          backgroundColor: "grey.100",
          color: "primary.main",
          typography: "contentMBold",
          flexShrink: "0",
          minWidth: "120px",
        }}
        size="large"
      >
        {selected}
      </Button>
      <Menu
        id="platform-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        MenuListProps={{ "aria-labelledby": "platform-menu" }}
        slotProps={{ paper: { sx: { width: 200 } } }}
      >
        {["B1", "D9", "D5"].map((shop) => (
          <MenuItem
            key={shop}
            selected={shop === selected}
            onClick={(e) => {
              setSelected(shop);
              handleClose(e);
            }}
          >
            {shop}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UniMenu;
