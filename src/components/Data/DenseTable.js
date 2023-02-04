import * as React from 'react';
import { useContext,  useEffect } from 'react';
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
import Header from './Header';

export default function DenseTable({ rows, headers }) {
  const { sort, setSort } = useContext(DataContext);
  const sortBy = (prop) => {
    if (prop === sort.prop) {
      setSort({ prop: prop, order: !sort.order });
    } else {
      setSort({ prop: prop, order: false });
    }
  }
  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
  <TableContainer sx={{ maxHeight: 670 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
      <TableRow>
            <TableCell sx={{ width: 10 }} ><strong>no.</strong></TableCell>
            <TableCell sx={{ width: 50 }} align="center" onClick={(e) => {
              sortBy("ID");
            }}><Button variant='text'><strong>{sort.prop === "ID" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} رقم الجلوس</strong></Button ></TableCell>
            <TableCell sx={{ width: 300 }} align="right" onClick={(e) => {
              sortBy("NAME");
            }}><Button variant='text'><strong>{sort.prop === "NAME" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} الاسم</strong></Button></TableCell>
            <TableCell sx={{ width: 150 }} align="center" onClick={(e) => {
              sortBy("SUB1");
            }}><Button variant='text'><strong>{sort.prop === "SUB1" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} {headers ? headers.subject1 : 'Subject 1'}</strong></Button></TableCell>
            <TableCell sx={{ width: 150 }} align="center" onClick={(e) => {
              sortBy("SUB2");
            }}><Button variant='text'><strong>{sort.prop === "SUB2" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} {headers ? headers.subject2 : 'Subject 2'}</strong></Button></TableCell>
            <TableCell sx={{ width: 150 }} align="center" onClick={(e) => {
              sortBy("SUB3");
            }}><Button variant='text'><strong>{sort.prop === "SUB3" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} {headers ? headers.subject3 : 'Subject 3'}</strong></Button></TableCell>
            <TableCell sx={{ width: 150 }} align="center" onClick={(e) => {
              sortBy("SUB4");
            }}><Button variant='text'><strong>{sort.prop === "SUB4" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} {headers ? headers.subject4 : 'Subject 4'}</strong></Button></TableCell>
            <TableCell sx={{ width: 100 }} align="center" onClick={(e) => {
              sortBy("TOTAL");
            }}><Button variant='text'><strong>{sort.prop === "TOTAL" && (sort.order ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />)} Total</strong></Button></TableCell>

            <TableCell sx={{ width: 100 }} align="center"><strong>%</strong></TableCell>
          </TableRow>
      </TableHead>
      <TableBody >
      {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell >{index + 1}</TableCell>
              <TableCell align="left"><strong>{row.id}</strong></TableCell>
              <TableCell align="right"><strong>{row.name}</strong></TableCell>
              <TableCell align="center"><strong>{row.subject1}</strong></TableCell>
              <TableCell align="center"><strong>{row.subject2}</strong></TableCell>
              <TableCell align="center"><strong>{row.subject3}</strong></TableCell>
              <TableCell align="center"><strong>{row.subject4}</strong></TableCell>
              <TableCell align="center"><strong>{row.total}</strong></TableCell>
              <TableCell align="center"><strong>{Number.parseFloat(row.p).toFixed(2)}%</strong></TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
</Paper>
  );
}


