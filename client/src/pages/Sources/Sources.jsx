import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    fontSize: "large"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();
  const [sourceData, setSourceData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("/api/sources/");
      setSourceData(res.data);
    }
    fetchData();
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>Caption</TableCell>
            <TableCell align="right" className={classes.head}>URL</TableCell>
            <TableCell align="right" className={classes.head}>Content Length</TableCell>
            <TableCell align="right" className={classes.head}>Last Modified</TableCell>
            <TableCell align="right" className={classes.head}>Content Encoding</TableCell>
            <TableCell align="right" className={classes.head}>Server</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sourceData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.caption}
              </TableCell>
              <TableCell align="right"><a target="_blank" href={row.url}>{row.url}</a></TableCell>
              <TableCell align="right">{row.content_length}</TableCell>
              <TableCell align="right">{row.last_modified}</TableCell>
              <TableCell align="right">{row.content_encoding}</TableCell>
              <TableCell align="right">{row.server}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}