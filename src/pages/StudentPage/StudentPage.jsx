import { Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars

function StudentPage() {
  return (
    <Stack marginTop={8} gap={2}>
      <Helmet>
        <title>Student</title>
      </Helmet>
      <Typography variant="h4">Student</Typography>
    </Stack>
  );
}

export default StudentPage;
