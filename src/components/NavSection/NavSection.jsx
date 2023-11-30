import { List, Stack } from "@mui/material";

// import { SubscriptionBanner } from "..";
import MorePopover from "./MorePopover";
import NavItem from "./NavItem";

// eslint-disable-next-line react/prop-types
const NavSection = ({ data = [], ...other }) => {
  return (
    <Stack
      direction="column"
      height="100%"
      justifyContent="space-between"
      backgroundColor="grey.0"
      {...other}
    >
      <List component={Stack} sx={{ p: 1.5, gap: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
        {/* <SubscriptionBanner mt={2} /> */}
      </List>

      <List component={Stack} sx={{ p: 1.5 }}>
        <MorePopover />
      </List>
    </Stack>
  );
};

export default NavSection;
