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

import axios from "axios";

import * as React from "react";
import useListRoom from "@/hook/useListRoom";

import dayjs from "dayjs";

import { TableToolbar, TableHeader } from "@/components";
import { toast } from "react-toastify";

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
  const theme = useTheme();
  const [selected, setSelected] = React.useState([]);

  const { listRooms } = useListRoom();

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

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = listRooms.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks

    setSelected([]);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleDeleteSelected = () => {
    const selectedRows = listRooms.filter((row) => isSelected(row.id));
    console.log(selectedRows);

    if (selectedRows.length === 0) {
      return;
    }

    try {
      selectedRows.forEach(async (row) => {
        await axios.delete(`http://127.0.0.1:8080/api/rooms/${row.id}`);
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
      // const { listRooms } = useListRoom();
      setSelected([]);
      toast.success("Delete room successfully");
    } catch (error) {
      console.error("Error deleting selected rows:", error);
    }
  };

  return (
    listRooms &&
    listRooms.length > 0 && (
      <>
        <TableToolbar
          numSelected={selected.length}
          onDeleteSelected={handleDeleteSelected}
          rowCount={listRooms.length}
        />
        <TableContainerStyled>
          <Table stickyHeader>
            <TableHeader
              headers={TABLE_HEADERS}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
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
                    <TableCell>
                      {dayjs(item.date).format("DD/MM/YYYY")}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainerStyled>
      </>
    )
  );
  // );
}

export default AttendanceBody;
