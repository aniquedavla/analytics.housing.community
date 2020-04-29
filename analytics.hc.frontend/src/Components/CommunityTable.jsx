import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from "./Title"


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));
const CommunityTable = ({communities}) => {
  const classes = useStyles();
  console.log(communities)
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
          {communities.map((community) => (
            <TableRow key={community.id}>
              <TableCell>{community.name}</TableCell>
              <TableCell>{community.dateCreated}</TableCell>
              <TableCell >{community.numberOfListings}</TableCell>
              <TableCell >{community.averageRent}</TableCell>
              <TableCell >{community.lowRent}</TableCell>
              <TableCell >{community.highRent}</TableCell>
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
export default CommunityTable