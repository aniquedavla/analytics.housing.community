import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
const CommunityTable = ({notes}) => {
  const classes = useStyles();
  console.log(notes)
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><Box fontWeight="fontWeightBold">Note by</Box></TableCell>
            <TableCell><Box fontWeight="fontWeightBold">Subject</Box></TableCell>
            <TableCell><Box fontWeight="fontWeightBold">Note</Box></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes.map((note) => (
            <TableRow key={note.id}>
                <TableCell>{note.noteBy}</TableCell>
              <TableCell>{note.subject}</TableCell>
              <TableCell>{note.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more communities
        </Link>
      </div> */}
    </React.Fragment>
  );
}
export default CommunityTable