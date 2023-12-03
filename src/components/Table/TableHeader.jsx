/* eslint-disable react/prop-types */

import {
  Stack,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Checkbox,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const TableHeader = (props) => {
  const { onSelectAllClick, numSelected, rowCount, headers } = props;

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
          {headers.map((header, index) => (
            // Table Header
            <TableCell
              key={`${header}-${index}`}
              sx={{
                py: 2,
                px: 1,
                backgroundColor: "grey.100",
                position: "sticky",
                left: 0,
                zIndex: index === 0 ? 999 : 1,
                borderRight: index === 0 && "4px solid",
                borderColor: "grey.100",
                minWidth: 160,
              }}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                {typeof header === "string" ? (
                  <Typography color="grey.900" variant="contentSBold">
                    {header}
                  </Typography>
                ) : (
                  <Stack direction="column">
                    <Typography color="grey.900" variant="contentSBold">
                      {header.firstLine}
                    </Typography>
                    <Typography color="grey.900" variant="contentSRegular">
                      {header.secondLine}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default TableHeader;
