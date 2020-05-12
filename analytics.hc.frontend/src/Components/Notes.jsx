import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import NotesTable from "./NotesTable"
import AddNote from "./AddNote"
import Box from '@material-ui/core/Box';

class Notes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes:[],
      isLoaded:false
    }
  }
  componentDidMount(){
    const notes = "http://localhost:8080/getNotes";
    fetch(notes)
          .then(response => response.json())
          .then(json => this.setState({
              notes: json,
              isLoaded: true
    }));
  }
  render(){
    console.log(this.state.notes);
    if(this.state.isLoaded){
      return (
        <React.Fragment>
            <Title>Notes</Title>
            <Box paddingLeft={120}><AddNote></AddNote></Box>
            <NotesTable notes={this.state.notes}></NotesTable>
        </React.Fragment>
      );
    } else {
        return(
          <div>
            <Title>Notes</Title>
            loading...
          </div>
        )
    }
  }
}
export default Notes