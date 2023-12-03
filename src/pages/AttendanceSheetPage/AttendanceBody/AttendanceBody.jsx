import {
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Checkbox,
  styled,
  Table,
  useTheme,
} from "@mui/material";

import * as React from "react";

import { TableToolbar, TableHeader } from "@/components";

const TableContainerStyled = styled(TableContainer)((props) => ({
  maxHeight: "60vh",
  overflowX: "auto",
  borderRadius: 1,
  boxShadow: `0 ${props.theme.spacing(0.5)} ${props.theme.spacing(0.5)} ${
    props.theme.palette.grey[500]
  }}`,
}));

function AttendanceBody() {
  const TABLE_HEADERS = [
    { firstLine: "Room" },
    { firstLine: "Building" },
    { firstLine: "Floor" },
    { firstLine: "Seating Capacity" },
    { firstLine: "Created time" },
  ];
  const listRooms = [
    {
      id: 1,
      room: "101",
      building: "Main b",
      floor: "1",
      seating: "30",
      date: "2023-12-01",
    },
    {
      id: 2,
      room: "203",
      building: "Science Building",
      floor: "2",
      seating: "25",
      date: "2023-12-02",
    },
    {
      id: 3,
      room: "305",
      building: "Arts Building",
      floor: "3",
      seating: "40",
      date: "2023-12-03",
    },
    {
      id: 4,
      room: "404",
      building: "Engineering Building",
      floor: "4",
      seating: "35",
      date: "2023-12-04",
    },
    {
      id: 5,
      room: "501",
      building: "Business Center",
      floor: "5",
      seating: "50",
      date: "2023-12-05",
    },
    {
      id: 6,
      room: "606",
      building: "Technology Tower",
      floor: "6",
      seating: "28",
      date: "2023-12-06",
    },
    {
      id: 7,
      room: "701",
      building: "Medicine Complex",
      floor: "7",
      seating: "45",
      date: "2023-12-07",
    },
    {
      id: 8,
      room: "802",
      building: "Liberal Arts Hall",
      floor: "8",
      seating: "20",
      date: "2023-12-08",
    },
    {
      id: 9,
      room: "906",
      building: "Music Academy",
      floor: "9",
      seating: "15",
      date: "2023-12-09",
    },
    {
      id: 10,
      room: "1001",
      building: "Dormitory",
      floor: "10",
      seating: "60",
      date: "2023-12-10",
    },
  ];
  const theme = useTheme();
  const [selected, setSelected] = React.useState([]);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = listRooms.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <>
      <TableToolbar numSelected={selected.length} />
      <TableContainerStyled>
        <Table stickyHeader>
          <TableHeader
            headers={TABLE_HEADERS}
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={listRooms.length}
          />
          <TableBody>
            {listRooms.map((item, index) => {
              const isItemSelected = isSelected(item.id);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, item.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={listRooms.id}
                  selected={isItemSelected}
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
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      left: 0,
                      borderRight: `${theme.spacing(0.5)} solid ${
                        theme.palette.grey[100]
                      }`,
                      minWidth: 2,
                    }}
                  >
                    {item.room}
                  </TableCell>
                  <TableCell>{item.building}</TableCell>
                  <TableCell>{item.floor}</TableCell>
                  <TableCell>{item.seating}</TableCell>
                  <TableCell>{item.date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </>
  );
}

export default AttendanceBody;
