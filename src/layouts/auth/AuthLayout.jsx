import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import BaseLayout from "../base/BaseLayout";

export default function AuthLayout() {
  const theme = useTheme();

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} display={{ xs: "none", sm: "flex" }}>
          <Stack
            direction="column"
            justifyContent="center"
            padding={{
              xs: theme.spacing(4, 1, 4, 1),
              sm: theme.spacing(3, 1, 2, 1),
              lg: 0,
            }}
            gap={2}
          >
            <Typography variant="h3">
              Listen, Learn, and Lead
              <Box
                component="br"
                sx={{ display: { xs: "none", sm: "block" } }}
              />{" "}
              with our Platform
            </Typography>
            <Typography variant="contentLBold" color="grey.700">
              Uncover Market Insights, Track Competitors, and
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />{" "}
              Stay Ahead of the Trends!
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Outlet />
        </Grid>
      </Grid>
    </BaseLayout>
  );
}
