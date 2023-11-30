import { Button, ListItemText, useTheme, alpha } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import { StyledNavItem, StyledNavItemIcon } from "./NavSection.styles";

// eslint-disable-next-line react/display-name
const NavItem = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ title, path, icon, info, onClick, sx, ...other }, ref) => {
    const theme = useTheme();

    return path ? (
      <StyledNavItem
        ref={ref}
        disableGutters
        component={NavLink}
        to={path}
        onClick={onClick}
        sx={{
          typography: "contentMBold",
          // TODO: Change color Additional palette
          "&.active": {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
          },
          ...sx,
        }}
        {...other}
      >
        <StyledNavItemIcon sx={{ "&.active": { color: "text.active" } }}>
          {icon && icon}
        </StyledNavItemIcon>
        <ListItemText disableTypography primary={title} />

        {info && info}
      </StyledNavItem>
    ) : (
      <StyledNavItem
        ref={ref}
        disableGutters
        component={Button}
        onClick={onClick}
        sx={{ typography: "contentMBold", ...sx }}
        {...other}
      >
        <StyledNavItemIcon sx={{ "&.active": { color: "text.active" } }}>
          {icon && icon}
        </StyledNavItemIcon>
        <ListItemText disableTypography primary={title} />

        {info && info}
      </StyledNavItem>
    );
  }
);

export default NavItem;
