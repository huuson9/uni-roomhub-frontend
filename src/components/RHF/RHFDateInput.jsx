/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { Stack, InputLabel, FormHelperText } from "@mui/material";
import "dayjs/locale/th";
import "dayjs/locale/en-gb";

const RHFDateInput = ({ name, label, placeholder, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Stack gap={0.5}>
          {label && (
            <InputLabel
              htmlFor={name}
              sx={{ typography: "contentMBold", color: "grey.800" }}
            >
              {label}
            </InputLabel>
          )}
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={"en-gb"}
          >
            <DatePicker id={name} value={value} onChange={onChange} />
          </LocalizationProvider>
          {error && (
            <FormHelperText
              error={!!error}
              sx={{ typography: "contentSRegular" }}
            >
              {error.message}
            </FormHelperText>
          )}
        </Stack>
      )}
    />
  );
};

export default RHFDateInput;
