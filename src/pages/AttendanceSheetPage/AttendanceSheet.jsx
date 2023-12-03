import { Stack, Button } from "@mui/material";
import { UniMenu, DatePickerPopover } from "@/components";
import { Helmet } from "react-helmet-async";
import AttendanceBody from "./AttendanceBody/AttendanceBody";
// eslint-disable-next-line no-unused-vars

function AttendanceSheet() {
  return (
    <Stack gap={2}>
      <Helmet>
        <title>Attendance Sheet</title>
      </Helmet>
      <Stack
        marginTop={8}
        direction="row"
        gap={2}
        justifyContent="space-between"
      >
        <Stack direction="row" gap={2}>
          <UniMenu />
          <DatePickerPopover />
        </Stack>
        <Button variant="contained">Generate Sheet</Button>
      </Stack>
      <AttendanceBody />
    </Stack>
  );
}

export default AttendanceSheet;
