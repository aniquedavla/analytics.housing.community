import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from "./Title"

// Generate Community Data
function createData(id, dateCreated, name, shipTo, paymentMethod, amount) {
  return { id, dateCreated, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function CommunityTable() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Communities Descriptive Analytics</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Community Name</TableCell>
            <TableCell>Date created</TableCell>
            <TableCell>Number of listings</TableCell>
            <TableCell>Average rent</TableCell>
            <TableCell>Lowest rent</TableCell>
            <TableCell>Highest rent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dateCreated}</TableCell>
              <TableCell align="right">{row.averageRent}</TableCell>
              <TableCell align="right">{row.lowestRent}</TableCell>
              <TableCell align="right">{row.lowestRent}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more communities
        </Link>
      </div>
    </React.Fragment>
  );
}