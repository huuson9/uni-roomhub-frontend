import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  styled,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";
import { Search } from "@/components";

const APP_BAR_MOBILE = 64;

const StyledMainWrapper = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(3),
  overflowX: "hidden",

  [theme.breakpoints.up("lg")]: {
    paddingTop: theme.spacing(3),
    maxWidth: "100%",
  },
}));

const DashboardLayout = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Stack direction="row" minHeight="100vh" overflow="hidden">
      <AppBar position="fixed">
        <Toolbar
          component={Stack}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <HiOutlineMenuAlt4 color={theme.palette.grey[800]} />
          </IconButton>
          <Search />
        </Toolbar>
      </AppBar>
      <NavigationDrawer open={mobileOpen} onClose={handleDrawerToggle} />

      <StyledMainWrapper>
        <Box component="main" flex={1}>
          <Outlet />
        </Box>

        <Footer />
      </StyledMainWrapper>
    </Stack>
  );
};

export default DashboardLayout;
