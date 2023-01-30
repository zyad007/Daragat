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



export default function DenseTable({rows}) {
  const { sort, setSort } = useContext(DataContext);
  React.useEffect(() => {
    console.log(sort);
  }, [sort])
  const sortBy = (prop) => {
    if(prop === sort.prop) {
      console.log("hey")
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
            }}>Id</TableCell>
            <TableCell sx={{ width: 300 }} align="left" onClick={(e)=>  {
              sortBy("NAME");
            }}>Name</TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB1");
            }}>sub1</TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB2");
            }}>sub2</TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB3");
            }}>sub3</TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB4");
            }}>sub4</TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB5");
            }}>sub5</TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("SUB6");
            }}>sub6</TableCell>
            <TableCell align="left" onClick={(e)=>  {
              sortBy("TOTAL");
            }}>Total</TableCell>

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
            <TableCell align="left">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}