import {
  Box,
  Button,
  Drawer,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { NavSection } from "@/components";
import { navConfig } from "./NavigationDrawer.config";

const NAV_WIDTH = 280;

// eslint-disable-next-line react/prop-types
const NavigationDrawer = ({ open, onClose }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const drawer = (
    <>
      <Box backgroundColor="grey.0" px={1.5}>
        <Button
          component={NavLink}
          to="/user/account"
          underline="none"
          sx={{
            p: 0,
            display: "block",
            borderRadius: 1,
            ":hover": { background: theme.palette.grey[200] },
            "&.active": { background: theme.palette.grey[200] },
            transition: theme.transitions.create("background"),
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            p={2}
            borderRadius={1.5}
          >
            {/* <Avatar src={me.avatarUrl} alt="photoURL" /> */}
            <Stack direction="column" sx={{ lineHeight: 1 }}>
              <Typography
                variant="contentMBold"
                color="grey.900"
                sx={{
                  width: 168,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textTransform: "none",
                }}
              >
                huuson
              </Typography>
              <Typography variant="contentXsRegular" color="grey.700">
                huuson
              </Typography>
            </Stack>
          </Stack>
        </Button>
      </Box>

      <NavSection data={navConfig} />
      <Box sx={{ flexGrow: 1 }} />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { lg: 0 }, width: { lg: NAV_WIDTH } }}
    >
      <Drawer
        open
        variant="permanent"
        sx={{ display: { xs: "none", lg: "block" } }}
        PaperProps={{ sx: { width: NAV_WIDTH, bgcolor: "background.default" } }}
      >
        {drawer}
      </Drawer>
      <Drawer
        open={open}
        onClose={onClose}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", lg: "none" } }}
        PaperProps={{ sx: { width: NAV_WIDTH } }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default NavigationDrawer;
