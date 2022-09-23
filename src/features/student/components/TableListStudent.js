import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import {markColor} from "../../../util/common"
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function TableListStudent({studentList, cityMap}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Mark</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.data && studentList.data.map((student,index) =>(
            <TableRow key={index}>
            <TableCell>{index+1}</TableCell>
            <TableCell align="left">{student.name}</TableCell>
            <TableCell align="left">{student.gender}</TableCell>
            <TableCell style={{color: markColor(student.mark)}}align="left">{student.mark}</TableCell>
            <TableCell align="left">{cityMap[student.city]}</TableCell>
            <TableCell align="right">
              <Button  variant='outlined' color='secondary'>Delete</Button>
              <Button variant='outlined' color='primary'>Edit</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}