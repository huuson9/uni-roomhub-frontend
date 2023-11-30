import { styled, Stack, InputBase } from "@mui/material";

export const StyledSearch = styled(Stack)((props) => ({
  color: props.theme.palette.grey[800],
  position: "relative",
  borderRadius: 100,
  border: "2px solid",
  borderColor: props.theme.palette.grey[0],
  backgroundColor: "transparent",
  width: "100%",
  alignItems: "center",
  flexDirection: "row",
  padding: props.theme.spacing(0.5, 0),
  zIndex: 2,
}));

export const SearchIconWrapper = styled(Stack)((props) => ({
  padding: props.theme.spacing(0, 2),
  color: props.theme.palette.grey[0],
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)((props) => ({
  flexGrow: 1,
  "& .MuiInputBase-input": {
    padding: props.theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${props.theme.spacing(5)})`,
    width: "100%",

    color: props.theme.palette.grey[0],
    "::placeholder": {
      color: props.theme.palette.grey[200],
      opacity: 1,
    },
  },
}));
