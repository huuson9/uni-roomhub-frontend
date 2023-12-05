/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import { IconContext } from "react-icons";
import { FaXmark } from "react-icons/fa6";

const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  right: theme.spacing(3),
  color: theme.palette.grey[500],
}));
// eslint-disable-next-line react/prop-types

const AlertDialog = ({
  title,
  open,
  closeBtn = true,
  onClose,
  icon,
  iconColor,
  children,
  actions,
  ...other
}) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { maxWidth: 495 } }}
      scroll="body"
      aria-labelledby="dialog-title"
      {...other}
    >
      {closeBtn && (
        <StyledCloseButton onClick={onClose}>
          <FaXmark color={theme.palette.grey[700]} size={24} />
        </StyledCloseButton>
      )}

      <Stack
        direction="column"
        padding={4}
        gap={3}
        justifyContent="center"
        textAlign="center"
      >
        <IconContext.Provider
          value={{ color: theme.palette.grey[100], size: 48 }}
        >
          <Stack justifyContent="center" alignItems="center">
            <Stack
              borderRadius={100}
              justifyContent="center"
              alignItems="center"
              width={100}
              height={100}
              bgcolor={iconColor ?? alpha(theme.palette.primary.main, 0.5)}
            >
              {icon}
            </Stack>
          </Stack>
        </IconContext.Provider>
        <Stack direction="column" gap={2}>
          <DialogTitle
            id="dialog-title"
            typography="h4"
            color="grey.900"
            sx={{ p: 0 }}
          >
            {title}
          </DialogTitle>
          <DialogContent sx={{ p: 0 }}>{children}</DialogContent>
        </Stack>
        {actions?.length > 0 && (
          <DialogActions sx={{ flexDirection: "column" }}>
            {actions.map((action, index) => (
              <Button
                fullWidth
                size="large"
                key={action.label}
                variant={index === 0 ? "contained" : "outlined"}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            ))}
          </DialogActions>
        )}
      </Stack>
    </Dialog>
  );
};

export default AlertDialog;
