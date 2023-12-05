import { Helmet } from "react-helmet-async";
import { Stack, Typography } from "@mui/material";

function ReportPage() {
  return (
    <Stack marginTop={8} gap={2}>
      <Helmet>
        <title>Report</title>
      </Helmet>
      <Typography variant="h4">Report Page</Typography>
    </Stack>
  );
}

export default ReportPage;
