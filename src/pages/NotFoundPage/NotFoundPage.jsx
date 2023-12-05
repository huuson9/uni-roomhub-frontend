import { useTheme } from "@emotion/react";
import { Card, Stack, Typography } from "@mui/material";
import { FaCircleExclamation } from "react-icons/fa6";
import { BaseLayout } from "@/layouts";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>

      <BaseLayout>
        <Card sx={{ margin: "auto", padding: 4 }}>
          <Stack
            direction="column"
            gap={3}
            sx={{ alignItems: "center", textAlign: "center", maxWidth: 429 }}
          >
            <FaCircleExclamation
              size={100}
              color={theme.palette.error.main}
              opacity={0.5}
            />
            <Typography variant="h4" color="grey.900">
              404 Not Found!
            </Typography>
            <Typography variant="contentMRegular" color="grey.700">
              Sorry, but the page you are looking for does not exist. Please
              check the address and try again.
            </Typography>
          </Stack>
        </Card>
      </BaseLayout>
    </>
  );
};

export default NotFoundPage;
