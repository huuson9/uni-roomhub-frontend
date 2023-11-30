// import { LanguageMenu } from "@/components";
import { Container, Stack, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

// eslint-disable-next-line react/prop-types
const BaseLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <Stack direction="column" minHeight="100vh">
      <Container sx={{ width: "100%", maxWidth: "100% !important" }}>
        <Stack
          component="header"
          direction="row"
          padding={theme.spacing(3.5, 1, 2, 0.5)}
          alignContent="center"
          justifyContent="space-between"
        >
          {/* <Logo /> */}
          {/* <LanguageMenu /> */}
        </Stack>
      </Container>

      <Container sx={{ alignItems: "center", display: "flex", flexGrow: 1 }}>
        {children ?? <Outlet />}
      </Container>

      <Container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexGrow: 1,
          py: 2,
        }}
      >
        <Footer />
      </Container>
    </Stack>
  );
};

export default BaseLayout;
