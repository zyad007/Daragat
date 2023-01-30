import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 10 }} >no.</TableCell>
            <TableCell sx={{ width: 50 }} align="center">Id</TableCell>
            <TableCell sx={{ width: 300 }} align="left">Name</TableCell>
            <TableCell align="left">sub1</TableCell>
            <TableCell align="left">sub2</TableCell>
            <TableCell align="left">sub3</TableCell>
            <TableCell align="left">sub4</TableCell>
            <TableCell align="left">sub5</TableCell>
            <TableCell align="left">sub6</TableCell>
            <TableCell align="left">total</TableCell>
            <TableCell align="left">%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell >{index+1}</TableCell>
            <TableCell align="left">{row.id}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.sub1}</TableCell>
            <TableCell align="left">{row.sub2}</TableCell>
            <TableCell align="left">{row.sub3}</TableCell>
            <TableCell align="left">{row.sub4}</TableCell>
            <TableCell align="left">{row.sub5}</TableCell>
            <TableCell align="left">{row.sub6}</TableCell>
            <TableCell align="left">{row.total}</TableCell>
            <TableCell align="left">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}