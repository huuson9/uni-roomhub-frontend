import { Divider, Menu, Stack } from "@mui/material";
import * as React from "react";
import { HiOutlineMenu } from "react-icons/hi";

import { IconSVG } from "..";
import NavItem from "./NavItem";

const MorePopover = ({ ...other }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleOpen = (event) => {
    setOpen(!!event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem
        ref={anchorRef}
        title="More"
        icon={<HiOutlineMenu size={24} />}
        onClick={handleOpen}
        id="language-button"
        aria-controls={open && "language-menu"}
        {...other}
      />

      <Menu
        id="more-menu"
        open={!!anchorRef.current && open}
        hidden={!anchorRef.current}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        slotProps={{
          paper: { sx: { p: 1.5, mt: -1, ml: -0.5, minWidth: 280 } },
        }}
        MenuListProps={{ "aria-labelledby": "more-button" }}
        {...other?.popoverProps}
      >
        <Stack spacing={0.75}>
          <NavItem
            title="Your Information"
            icon={<IconSVG name="user" />}
            path="/user/account"
            onClick={handleClose}
          />

          <Divider orientation="horizontal" flexItem />

          <NavItem title="English" icon={<IconSVG name="flag-us" imgSvg />} />
          <NavItem
            title="Sign Out"
            icon={<IconSVG name="sign-out" />}
            // onClick={logout}
          />
        </Stack>
      </Menu>
    </>
  );
};

export default MorePopover;
