import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { reportSchema } from "@/validations/RoomSchema";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Stack,
  Typography,
  Divider,
  useTheme,
  styled,
  Button,
} from "@mui/material";
import { RHFTextField, RHFDateInput } from "@/components";
import { FormProvider, useForm } from "react-hook-form";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1.5, 3),
  minWidth: theme.spacing(18.5),
  ...theme.typography.button,
}));

function NewRoomPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const method = useForm({
    resolver: yupResolver(reportSchema),
  });

  const handleSubmit = async (data) => {
    try {
      const room = {
        room: data.room,
        building: data.building,
        floor: data.floor,
        seating: data.seating,
        date: data.date,
      };

      console.log(room);

      // Gửi dữ liệu từ form lên API để tạo phòng mới
      const response = await axios.post(
        "http://127.0.0.1:8080/api/rooms",
        room
      );

      console.log("Room created successfully:", response.data);
      toast.success("Add room successfully");

      method.reset(); // Reset form after successful submission
      navigate("/attendance-sheet"); // Navigate to another page after successful submission
    } catch (error) {
      console.error("Error creating room:", error);
      toast.error("Add room unsuccessfully");
    }
  };

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(handleSubmit)}>
        <Stack marginTop={4}>
          <Helmet>Create New Room</Helmet>
          <Stack
            direction="row"
            justifyContent="space-between"
            paddingX={theme.spacing(4)}
            paddingY={theme.spacing(4)}
          >
            <Typography variant="h4">Create New Room</Typography>
            <Stack direction="row" gap={2}>
              <StyledButton
                sx={{
                  backgroundColor: theme.palette.grey[0],
                  color: theme.palette.grey[800],
                }}
                onClick={() =>
                  navigate({
                    pathname: "/attendance-sheet",
                  })
                }
              >
                Cancel
              </StyledButton>
              <StyledButton type="submit" variant="contained" size="large">
                Create
              </StyledButton>
            </Stack>
          </Stack>
          <Stack
            minHeight="70vh"
            direction="row"
            borderRadius={theme.spacing(4)}
            gap={2}
            backgroundColor={theme.palette.grey[0]}
          >
            <Stack
              backgroundColor={theme.palette.grey[0]}
              width="100%"
              direction="row"
              padding={theme.spacing(2)}
              borderRadius={theme.spacing(4)}
              gap={2}
            >
              <Stack
                backgroundColor={theme.palette.grey[0]}
                width="45%"
                padding={theme.spacing(2, 4)}
                borderRadius={theme.spacing(4)}
                gap={3}
              >
                <Typography variant="contentXlRegular">
                  Room Information
                </Typography>
                <Stack direction="column" gap={2}>
                  <RHFTextField
                    name="room"
                    label="Room Name"
                    placeholder="e.g.: “203”"
                  />
                  <RHFTextField
                    name="building"
                    label="Building Name"
                    placeholder="e.g.: “Science Building”"
                  />
                  <RHFTextField
                    name="floor"
                    label="Floor Number"
                    placeholder="e.g.: “10”"
                  />
                </Stack>
              </Stack>
              <Divider orientation="vertical" flexItem />

              <Stack
                backgroundColor={theme.palette.grey[0]}
                marginTop={theme.spacing(4)}
                width="45%"
                padding={theme.spacing(4)}
                borderRadius={theme.spacing(4)}
                gap={3}
              >
                <RHFTextField
                  name="seating"
                  label="Seating Capacity"
                  placeholder="e.g.: “50”"
                />
                <RHFDateInput name="date" label="Created Date" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </FormProvider>
  );
}
export default NewRoomPage;
