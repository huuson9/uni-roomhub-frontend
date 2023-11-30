import { Button } from "@mui/material";
import {
  StyledSearch,
  SearchIconWrapper,
  StyledInputBase,
} from "./Search.styles.jsx";
import { IconSVG } from "..";

// eslint-disable-next-line react/prop-types
const Search = ({ value, setValue, onSubmit, ...other }) => (
  <form onSubmit={onSubmit}>
    <StyledSearch>
      <SearchIconWrapper>
        <IconSVG name="search" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputProps={{ "aria-label": "search" }}
        {...other}
      />
      <Button
        variant="text"
        size="medium"
        sx={{ px: 3, "&:hover": { background: "transparent" } }}
        disableRipple
        type="submit"
      >
        Search
      </Button>
    </StyledSearch>
  </form>
);

export default Search;
