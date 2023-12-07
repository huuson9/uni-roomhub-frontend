/* eslint-disable react/prop-types */
import {
  FormHelperText,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const RHFTextField = ({
  name,
  label,
  startAdornment,
  endAdornment,
  wrapperProps,
  focusHelpText,
  ...others
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Stack gap={1} {...wrapperProps}>
          {label && (
            <InputLabel
              htmlFor={name}
              sx={{ typography: "contentMBold", color: "grey.800" }}
            >
              {label}
            </InputLabel>
          )}
          <TextField
            size="small"
            id={name}
            value={value}
            type="text"
            onChange={onChange}
            error={!!error}
            InputProps={{
              startAdornment: startAdornment && (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ),
              endAdornment: endAdornment && (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
              ),
            }}
            {...others}
          />
          {error && (
            <FormHelperText
              error={!!error}
              sx={{ typography: "contentSRegular" }}
            >
              {error.message}
            </FormHelperText>
          )}
          {!!value && focusHelpText && !error && (
            <FormHelperText
              sx={{ typography: "contentSRegular", color: "secondary.light" }}
            >
              {focusHelpText}
            </FormHelperText>
          )}
        </Stack>
      )}
    />
  );
};

export default RHFTextField;
