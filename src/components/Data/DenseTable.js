import * as React from 'react';
import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import DataContext from '../../context/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

export default function DenseTable({ rows }) {
  const { sort, setSort } = useContext(DataContext);
  const sortBy = (prop) => {
    if (prop === sort.prop) {
      setSort({ prop: prop, order: !sort.order });
    } else {
      setSort({ prop: prop, order: true });
    }
  }
  const headers = rows[0];
  rows.shift();
  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
  <TableContainer sx={{ maxHeight: 670 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
      <TableRow>
            <TableCell sx={{ width: 10 }} ><strong>no.</strong></TableCell>
            <TableCell sx={{ width: 50 }} align="center" onClick={(e) => {
              sortBy("ID");
            }}><Button variant='text'><strong>{sort.prop === "ID" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} ID</strong></Button ></TableCell>
            <TableCell sx={{ width: 300 }} align="right" onClick={(e) => {
              sortBy("NAME");
            }}><Button variant='text'><strong>{sort.prop === "NAME" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} Name</strong></Button></TableCell>
            <TableCell sx={{ width: 150 }} align="left" onClick={(e) => {
              sortBy("SUB1");
            }}><Button variant='text'><strong>{sort.prop === "SUB1" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)}{headers.subject1}</strong></Button></TableCell>
            <TableCell sx={{ width: 150 }} align="left" onClick={(e) => {
              sortBy("SUB2");
            }}><Button variant='text'><strong>{sort.prop === "SUB2" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)}{headers.subject2}</strong></Button></TableCell>
            <TableCell sx={{ width: 150 }} align="left" onClick={(e) => {
              sortBy("SUB3");
            }}><Button variant='text'><strong>{sort.prop === "SUB3" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)}{headers.subject3}</strong></Button></TableCell>
            <TableCell sx={{ width: 150 }} align="left" onClick={(e) => {
              sortBy("SUB4");
            }}><Button variant='text'><strong>{sort.prop === "SUB4" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)}{headers.subject4}</strong></Button></TableCell>
            <TableCell sx={{ width: 100 }} align="left" onClick={(e) => {
              sortBy("TOTAL");
            }}><Button variant='text'><strong>{sort.prop === "TOTAL" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} Total</strong></Button></TableCell>

            <TableCell sx={{ width: 100 }} align="left"><strong>%</strong></TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
      {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{index + 1}</TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="center">{row.subject1}</TableCell>
              <TableCell align="center">{row.subject2}</TableCell>
              <TableCell align="center">{row.subject3}</TableCell>
              <TableCell align="center">{row.subject4}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{row.percent}%</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
</Paper>
  );
}


