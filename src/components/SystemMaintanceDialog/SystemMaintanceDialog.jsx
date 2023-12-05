import { Typography } from "@mui/material";
import { FaToolbox } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AlertDialog from "./AlertDialog";

// eslint-disable-next-line react/prop-types
const SystemMaintanceDialog = ({ open, onClose }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
    onClose && onClose();
  };

  return (
    <AlertDialog
      open={open}
      onClose={onClose ?? handleGoBack}
      title="System Maintainance"
      actions={[{ label: "Go Back", onClick: handleGoBack }]}
      icon={<FaToolbox />}
    >
      <Typography variant="contentMRegular" color="grey.700">
        The system is currently under maintainance and will be back soon. We
        apologize for any inconvenience caused.
      </Typography>
    </AlertDialog>
  );
};

export default SystemMaintanceDialog;
