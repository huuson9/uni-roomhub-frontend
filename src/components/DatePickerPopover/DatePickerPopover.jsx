import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";

import dayjs from "dayjs";

export default function SingleInputDateRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        slotProps={{ textField: { size: "small" } }}
        sx={{
          backgroundColor: "grey.100",
          borderRadius: 1,
          color: "red",
        }}
        defaultValue={[dayjs().subtract(7, "day"), dayjs()]}
        slots={{ field: SingleInputDateRangeField }}
      />
    </LocalizationProvider>
  );
}
