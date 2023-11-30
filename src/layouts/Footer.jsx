import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box>
    <Typography variant="contentXsRegular">
      Developed by{" "}
      <Typography
        component="span"
        variant="contentXsRegular"
        px={1}
        sx={{ display: { xs: "none", sm: "inline" } }}
      >
        |
      </Typography>
      <Typography
        component="br"
        variant="contentXsRegular"
        px={1}
        sx={{ display: { sm: "none" } }}
      />
      huuson9
    </Typography>
  </Box>
);

export default Footer;
