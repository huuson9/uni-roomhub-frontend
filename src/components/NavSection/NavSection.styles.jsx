import { ListItemButton, ListItemIcon, styled } from "@mui/material";

export const StyledNavItem = styled(ListItemButton)((props) => ({
  ...props.theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: props.theme.palette.primary.main,
  borderRadius: props.theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)((props) => ({
  width: 22,
  height: 22,
  color: props.theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
