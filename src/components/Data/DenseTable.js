import * as React from 'react';
import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DataContext from '../../context/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

export default function DenseTable({rows}) {
  const { sort, setSort } = useContext(DataContext);
  const sortBy = (prop) => {
    if(prop === sort.prop) {
      setSort({prop: prop, order: !sort.order});
    }else {
      setSort({prop: prop, order: true});
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 10 }} >no.</TableCell>
            <TableCell sx={{ width: 50 }} align="center" onClick={(e)=>  {
              sortBy("ID");
            }}><button>{sort.prop === "ID" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} ID</button></TableCell>
            <TableCell sx={{ width: 300 }} align="left" onClick={(e)=>  {
              sortBy("NAME");
            }}><button>{sort.prop === "NAME" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} Name</button></TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB1");
            }}><button>{sort.prop === "SUB1" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} Subject 1</button></TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB2");
            }}><button>{sort.prop === "SUB2" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} Subject 2</button></TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB3");
            }}><button>{sort.prop === "SUB3" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} Subject 3</button></TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB4");
            }}><button>{sort.prop === "SUB4" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} Subject 4</button></TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB5");
            }}><button>{sort.prop === "SUB5" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} Subject 5</button></TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB6");
            }}><button>{sort.prop === "SUB6" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} Subject 6</button></TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("TOTAL");
            }}><button>{sort.prop === "TOTAL" && (sort.order?<FontAwesomeIcon icon={faSortUp} /> :<FontAwesomeIcon icon={faSortDown} /> )} Total</button></TableCell>

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
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="left">{row.sub1}</TableCell>
            <TableCell align="left">{row.sub2}</TableCell>
            <TableCell align="left">{row.sub3}</TableCell>
            <TableCell align="left">{row.sub4}</TableCell>
            <TableCell align="left">{row.sub5}</TableCell>
            <TableCell align="left">{row.sub6}</TableCell>
            <TableCell align="left">{row.total}</TableCell>
            <TableCell align="left">{parseFloat(row.total/1050*100).toPrecision(4)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}