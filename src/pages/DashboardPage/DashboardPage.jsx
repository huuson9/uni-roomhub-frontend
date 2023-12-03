import { Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars

function DashboardPage() {
  return (
    <Stack marginTop={8} gap={2}>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Typography variant="h4">Dashboard Page</Typography>
    </Stack>
  );
}

export default DashboardPage;
