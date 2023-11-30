import {
  Table,
  Stack,
  Button,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Checkbox,
  styled,
} from "@mui/material";
import { TableHeader, UniMenu, DatePickerPopover } from "@/components";
import { Helmet } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
const TABLE_HEADERS = [
  { firstLine: "Room" },
  { firstLine: "Building" },
  { firstLine: "Floor" },
  { firstLine: "Seating Capacity" },
  { firstLine: "Date" },
  { firstLine: "Start Time" },
  { firstLine: "End Time" },
];

const TableContainerStyled = styled(TableContainer)(() => ({
  maxHeight: "70vh",
  overflowX: "auto",
  borderRadius: 1,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));

function AttendanceSheet() {
  const listRooms = [
    {
      room: "101",
      building: "Main b",
      floor: "1",
      seating: "30",
      stime: "08:00 AM",
      etime: "10:00 AM",
      date: "2023-12-01",
    },
    {
      room: "203",
      building: "Science Building",
      floor: "2",
      seating: "25",
      stime: "09:30 AM",
      etime: "11:30 AM",
      date: "2023-12-02",
    },
    {
      room: "305",
      building: "Arts Building",
      floor: "3",
      seating: "40",
      stime: "01:00 PM",
      etime: "03:00 PM",
      date: "2023-12-03",
    },
    {
      room: "404",
      building: "Engineering Building",
      floor: "4",
      seating: "35",
      stime: "10:00 AM",
      etime: "12:00 PM",
      date: "2023-12-04",
    },
    {
      room: "501",
      building: "Business Center",
      floor: "5",
      seating: "50",
      stime: "11:00 AM",
      etime: "01:00 PM",
      date: "2023-12-05",
    },
    {
      room: "606",
      building: "Technology Tower",
      floor: "6",
      seating: "28",
      stime: "03:30 PM",
      etime: "05:30 PM",
      date: "2023-12-06",
    },
    {
      room: "701",
      building: "Medicine Complex",
      floor: "7",
      seating: "45",
      stime: "12:30 PM",
      etime: "02:30 PM",
      date: "2023-12-07",
    },
    {
      room: "802",
      building: "Liberal Arts Hall",
      floor: "8",
      seating: "20",
      stime: "02:00 PM",
      etime: "04:00 PM",
      date: "2023-12-08",
    },
    {
      room: "906",
      building: "Music Academy",
      floor: "9",
      seating: "15",
      stime: "04:30 PM",
      etime: "06:30 PM",
      date: "2023-12-09",
    },
    {
      room: "1001",
      building: "Dormitory",
      floor: "10",
      seating: "60",
      stime: "07:00 PM",
      etime: "09:00 PM",
      date: "2023-12-10",
    },
  ];
  return (
    <Stack gap={2}>
      <Helmet>
        <title>Attendance Sheet</title>
      </Helmet>
      <Stack
        marginTop={8}
        direction="row"
        gap={2}
        justifyContent="space-between"
      >
        <Stack direction="row" gap={2}>
          <UniMenu />
          <DatePickerPopover />
        </Stack>
        <Button variant="contained">Generate Sheet</Button>
      </Stack>
      <TableContainerStyled>
        <Table stickyHeader>
          <TableHeader headers={TABLE_HEADERS} />
          <TableBody>
            {listRooms.map((item, index) => (
              <TableRow
                key={index}
                role="checkbox"
                sx={{
                  backgroundColor: `${index % 2 ? "grey.100" : "grey.200"}`,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "grey.400",
                  },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    label={item.room}
                    // checked={isItemSelected}
                    // inputProps={{
                    //   "aria-labelledby": labelId,
                    // }}
                  />
                </TableCell>
                {/* <TableCell
                  sx={{
                    position: "sticky",
                    left: 0,
                    backgroundColor: `${index % 2 ? "grey.100" : "grey.200"}`,
                    zIndex: 800,
                    borderRight: "4px solid #FAFAFA",
                    minWidth: 2,
                    "&:hover": {
                      bgcolor: "grey.400",
                    },
                  }}
                >
                  {item.room}
                </TableCell> */}
                <TableCell>{item.building}</TableCell>
                <TableCell>{item.floor}</TableCell>
                <TableCell>{item.seating}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.stime}</TableCell>
                <TableCell>{item.etime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </Stack>
  );
}

export default AttendanceSheet;
